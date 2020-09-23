import { applyMiddleware, createStore, compose } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import ReduxDucks from './ducks'
import rootSaga from './saga'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware: SagaMiddleware = createSagaMiddleware()

const composeEnhancers: typeof compose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore<any, any, any, any>(
  ReduxDucks,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store

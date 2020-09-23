import { combineReducers } from 'redux'
import { TAction, TStore, EGlobalActions } from 'types/storage'

// Reducers
import auth from './auth'

const appReducer = combineReducers<TStore | undefined, TAction>({
  auth
})

export default (state: TStore, action: TAction) => {
  if (action.type === EGlobalActions.RESET) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

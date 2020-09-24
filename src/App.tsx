import React from 'react'
import './App.css'
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './storage'
import theme from 'utils/theme'
import GlobalTheme from 'utils/GlobalTheme'
import { ThemeProvider } from 'styled-components'
import Header from 'components/Header'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalTheme />
        <Header />
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App

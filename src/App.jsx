import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import store from './redux/store'

const App = () => (
  <Provider store={store}>
    <Router>
      <MainPage />
    </Router>
  </Provider>
)

export default hot(App)

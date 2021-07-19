import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import store from './redux/store'

import AppRouter from './router/AppRouter'

const App = () => (
  <Provider store={store}>
    <Router>
      <AppRouter />
    </Router>
  </Provider>
)

export default hot(App)

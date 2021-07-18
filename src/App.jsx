import React from 'react'
import { hot } from 'react-hot-loader/root'
import { HashRouter as Router } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import Header from './components/Header'

const App = () => (
  <Router>
    <AppRouter>
      <Header />
    </AppRouter>
  </Router>
)

export default hot(App)

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Accesories from '../../layouts/Accesories'
import Child from '../../layouts/Child'
import Men from '../../layouts/Men'
import Women from '../../layouts/Women/Women'
import './AppRouter.scss'

const RouterApp = () => (
  <>
    <Header />
    <div className="container">
      <div>
        <Switch>
          <Route path="/accesories" component={Accesories} />
          <Route path="/child" component={Child} />
          <Route path="/men" component={Men} />
          <Route path="/men" component={Women} />
          <Route path="/" component={Women} />
        </Switch>
      </div>
    </div>
  </>
)

export default RouterApp

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Home from '../../components/Home'
import Navbar from '../../components/Navbar'
import Accesories from '../../layouts/Accesories'
import Child from '../../layouts/Child'
import Junior from '../../layouts/Junior'
import Men from '../../layouts/Men'
import Offers from '../../layouts/Offers'
import Women from '../../layouts/Women'
import './AppRouter.scss'

const RouterApp = () => (
  <>
    <Header />
    <Navbar />
    <div className="container">
      <div>
        <Switch>
          <Route path="/accesories" component={Accesories} />
          <Route path="/child" component={Child} />
          <Route path="/men" component={Men} />
          <Route path="/men" component={Women} />
          <Route path="/junior" component={Junior} />
          <Route path="/offers" component={Offers} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  </>
)

export default RouterApp

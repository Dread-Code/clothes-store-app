import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Footer from '../../layouts/Footer'
import Header from '../../components/Header'
import Home from '../../layouts/Home'
import MobileNavbar from '../../components/MobileNavbar'
import Navbar from '../../components/Navbar'
import MobileNavbarContext from '../../context/MobileNavbarContext'
import Accesories from '../../layouts/Accesories'
import Child from '../../layouts/Child'
import Junior from '../../layouts/Junior'
import Men from '../../layouts/Men'
import Offers from '../../layouts/Offers'
import Search from '../../layouts/Search/Search'
import Women from '../../layouts/Women'
import getProductos from '../../services/getProducts'
import './AppRouter.scss'

const RouterApp = () => {
  const [navBarAction, setNavBarAction] = useState(false)
  const handlerClick = () => {
    setNavBarAction(!navBarAction)
    getProductos()
  }
  return (
    <>
      <MobileNavbarContext.Provider value={{ navBarAction, setNavBarAction }}>
        <div className="router-container">
          <Header handlerClick={handlerClick} />
          <MobileNavbar />
          <Navbar />
        </div>
        <div className="container">
          <div>
            <Switch>
              <Route path="/accesories" component={Accesories} />
              <Route path="/child" component={Child} />
              <Route path="/men" component={Men} />
              <Route path="/men" component={Women} />
              <Route path="/junior" component={Junior} />
              <Route path="/offers" component={Offers} />
              <Route path="/search" component={Search} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
        <Footer />
      </MobileNavbarContext.Provider>
    </>
  )
}

export default RouterApp

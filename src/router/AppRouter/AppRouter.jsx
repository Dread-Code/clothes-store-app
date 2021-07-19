import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Home from '../../layouts/Home'
import MobileNavbar from '../../components/MobileNavbar'
import Navbar from '../../components/Navbar'
import MobileNavbarContext from '../../context/MobileNavbarContext'
import Categories from '../../layouts/Categories'
import Footer from '../../layouts/Footer'
import Search from '../../layouts/Search/Search'
import './AppRouter.scss'
import CartShop from '../../layouts/CartShop/CartShop'

const RouterApp = () => {
  const [navBarAction, setNavBarAction] = useState(false)
  const handlerClick = () => {
    setNavBarAction(!navBarAction)
  }
  const array = ['accesories', 'child', 'man', 'woman', 'junior', 'offers']
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
              {array.map(category => (
                <Route path={`/${category}`} component={Categories} key={category} />
              ))}
              <Route path="/search" component={Search} />
              <Route path="/cartshop" component={CartShop} />
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

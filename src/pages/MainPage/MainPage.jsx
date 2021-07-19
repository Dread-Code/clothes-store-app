import React, { useState } from 'react'
import AppRouter from '../../router/AppRouter'
import Header from '../../components/Header'
import MobileNavbar from '../../components/MobileNavbar'
import Navbar from '../../components/Navbar'
import MobileNavbarContext from '../../context/MobileNavbarContext'
import Footer from '../../layouts/Footer'

import './MainPage.scss'

const MainPage = () => {
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
          <AppRouter pathArray={array} />
        </div>
        <Footer />
      </MobileNavbarContext.Provider>
    </>
  )
}

export default MainPage

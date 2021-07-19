import React, { useContext } from 'react'
import MobileNavbarContext from '../../context/MobileNavbarContext'
import NavbarLinks from '../NavbarLinks'
import './MobileNavbar.scss'

const MobileNavbar = () => {
  const { navBarAction } = useContext(MobileNavbarContext)
  return (
    <nav className={`mobilenavbar-container ${navBarAction ? 'show' : 'hide'}`}>
      <NavbarLinks />
    </nav>
  )
}

export default MobileNavbar

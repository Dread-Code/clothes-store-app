import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import MobileNavbarContext from '../../context/MobileNavbarContext'
import './MobileNavbar.scss'

const MobileNavbar = () => {
  const { navBarAction } = useContext(MobileNavbarContext)
  return (
    <nav className={`mobilenavbar-container ${navBarAction ? 'show' : 'hide'}`}>
      <div>
        <div className="vertical-line" />
        <NavLink to="/men">Hombre</NavLink>
      </div>
      <div>
        <div className="vertical-line" />

        <NavLink to="/women">Mujer</NavLink>
      </div>
      <div>
        <div className="vertical-line" />
        <NavLink to="/junior">Junior</NavLink>
      </div>
      <div>
        <div className="vertical-line" />
        <NavLink to="/child">niños</NavLink>
      </div>
      <div>
        <div className="vertical-line" />
        <NavLink to="/accesories">Accesorios</NavLink>
      </div>
      <div>
        <div className="vertical-line" />
        <NavLink to="/offers">Ofertas</NavLink>
      </div>
    </nav>
  )
}

export default MobileNavbar

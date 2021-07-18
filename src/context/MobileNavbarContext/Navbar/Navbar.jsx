import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => (
  <nav className="navbar-container">
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

export default Navbar

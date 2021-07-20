import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarLinks.scss'

const NavbarLinks = () => (
  <>
    <div>
      <div className="vertical-line" />
      <NavLink to="/man">Hombre</NavLink>
    </div>
    <div>
      <div className="vertical-line" />
      <NavLink to="/woman">Mujer</NavLink>
    </div>
    <div>
      <div className="vertical-line" />
      <NavLink to="/junior">Junior</NavLink>
    </div>
    <div>
      <div className="vertical-line" />
      <NavLink to="/child">NIños</NavLink>
    </div>
    <div>
      <div className="vertical-line" />
      <NavLink to="/accesories">Accesorios</NavLink>
    </div>
    <div>
      <div className="vertical-line" />
      <NavLink to="/offers">Ofertas</NavLink>
    </div>
  </>
)

export default NavbarLinks

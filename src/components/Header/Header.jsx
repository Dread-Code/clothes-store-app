import React from 'react'
import PropTypes from 'prop-types'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from '../Button'
import SearchBar from '../SearchBar'
import UserIcon from '../../assets/icons/icon-user.svg'
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartIcon'
import './Header.scss'

const Header = ({ handlerClick }) => (
  <header className="header">
    <span role="button" tabIndex={0} className="hamburger-menu" onClick={handlerClick}>
      <GiHamburgerMenu />
    </span>
    <img
      src="https://user-images.githubusercontent.com/60331479/126054130-dc26d1f3-cab6-40fb-a84a-97fe65450ee1.png"
      alt="clothesstore icon"
      className="icon"
    />
    <SearchBar className="searchbar" />
    <div className="buttons-container">
      <ShoppingCartButton className="shooping-cart" />
      <UserIcon className="userIcon" />
      <Button type="-secondary" label="Iniciar sesión" className="login-button" />
    </div>
  </header>
)

Header.propTypes = {
  handlerClick: PropTypes.func.isRequired
}
export default Header

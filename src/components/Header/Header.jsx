import React from 'react'
import Button from '../../ui/Button'
import SearchBar from '../../ui/SearchBar/SearchBar'
import UserIcon from '../../assets/icons/icon-user.svg'
import ShoppingCartButton from '../../ui/ShoppingCartButton/ShoppingCartIcon'
import './Header.scss'

const Header = () => (
  <header className="header">
    <img
      src="https://user-images.githubusercontent.com/60331479/126054130-dc26d1f3-cab6-40fb-a84a-97fe65450ee1.png"
      alt="clothesstore icon"
      className="icon"
    />
    <SearchBar />
    <div className="buttons-container">
      <ShoppingCartButton className="shooping-cart" />
      <UserIcon className="userIcon" />
      <Button type="-secondary" label="Iniciar sesión" className="login-button" />
    </div>
  </header>
)

export default Header

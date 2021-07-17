import React from 'react'
import Button from '../../ui/Button'
import SearchBar from '../../ui/SearchBar/SearchBar'
import UserIcon from '../../assets/icons/icon-user.svg'
import ShoppingCartButton from '../../ui/ShoppingCartButton/ShoppingCartIcon'
import ClotheStoreIcon from '../../assets/images/ClothesStore.png'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
                <img src={ClotheStoreIcon} alt="clothesstore icon" className="icon"/>
                <SearchBar/>
                <div className="buttons-container">
                <ShoppingCartButton className="shooping-cart"/>
                <UserIcon className="userIcon"/>
                <Button type="-secondary" label="Iniciar sesión" className="login-button"/>
                </div>
        </header>
    )
}

export default Header

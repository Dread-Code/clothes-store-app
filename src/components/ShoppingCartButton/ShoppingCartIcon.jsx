import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import ShoppingCartIcon from '../../assets/icons/icon-cart.svg'
import './ShoppingCartButton.scss'

const ShoppingCartButton = () => {
  const cart = useSelector(state => state.cart)
  const history = useHistory()

  const handlerClick = () => {
    history.push('/cartshop')
  }

  return (
    <div className="a-header__shoppingCartButton">
      <button type="button" onClick={handlerClick}>
        <ShoppingCartIcon />
      </button>
      {cart.length > 0 && (
        <div className="burble">
          <span>{cart.length}</span>
        </div>
      )}
    </div>
  )
}

export default ShoppingCartButton

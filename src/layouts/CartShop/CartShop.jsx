import React from 'react'
import { useSelector } from 'react-redux'
import GridCard from '../../components/GridCard/GridCard'
import Button from '../../components/Button'
import './CartShop.scss'

const CartShop = () => {
  const cart = useSelector(state => state.cart)
  const total = prices => {
    let result = 0
    prices.forEach(({ price }) => {
      result = parseInt(price, 10) + result
    })
    return result
  }
  total(cart)
  return (
    <div className="search-container">
      <div className="cart-shop">
        <div>
          <h3 className="cart-tittle">Carrito</h3>
          <GridCard products={cart} cartShop={true} />
        </div>
        <div className="cart-count">
          <h2>
            {`Subototal(${cart.length}): `}
            <span>{`$${total(cart)}`}</span>
          </h2>
          <Button label="Realizar Pago" />
        </div>
      </div>
    </div>
  )
}

export default CartShop

import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Button from '../Button'
import { addCart } from '../../redux/actions/addCart'
import { deleteCart } from '../../redux/actions/deleteCart'
import './Card.scss'

const Card = ({ id, price, nameProduct, imageUrl, cartShop }) => {
  const dispatch = useDispatch()
  const handlerAdd = () => {
    dispatch(
      addCart({
        id,
        price,
        nameProduct,
        imageUrl
      })
    )
  }

  const handlerDelete = () => {
    dispatch(deleteCart(id))
  }

  return (
    <div className="card">
      <div className="discount" />
      <div
        style={{
          backgroundImage: `url("${imageUrl}")`
        }}
        className="card-image"
        alt="asdfasf"
      />
      <div className="card-content">
        <h3 className="card-title">{nameProduct}</h3>
        <div>
          <span className="price-primary">{`$${price}`}</span>
          <span className="price-secondary">$100.420</span>
        </div>
        <Button
          label={!cartShop ? 'Agregar al carrito' : 'Eliminar del carrito'}
          cart={!cartShop && true}
          onClick={!cartShop ? handlerAdd : handlerDelete}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  nameProduct: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  cartShop: PropTypes.bool
}
Card.defaultProps = {
  cartShop: false
}

export default Card

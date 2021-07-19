import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Button from '../Button'
import { addCart } from '../../redux/actions/addCart'
import './Card.scss'

const Card = ({ id, price, nameProduct, imageUrl }) => {
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
          <span className="price-primary">{`${price}`}</span>
          <span className="price-secondary">$100.420</span>
        </div>
        <Button label="Agregar al carrito" cart={true} onClick={handlerAdd} />
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  nameProduct: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default Card

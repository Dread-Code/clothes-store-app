import React from 'react'
import Button from '../Button'
import './Card.scss'

const Card = ({ id, price, nameProduct, imageUrl }) => (
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
      <Button label="Agregar al carrito" cart={true} />
    </div>
  </div>
)

export default Card

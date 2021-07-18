import React from 'react'
import Button from '../Button'
import './Card.scss'

const Card = () => (
  <div className="card">
    <div className="discount" />
    <img
      src="https://user-images.githubusercontent.com/60331479/126054321-e020a530-0af0-4c3a-8e1a-cb44688f04e7.png"
      alt="asdfasf"
    />
    <div className="card-content">
      <h3>Pantalón silueta skinny color sólido</h3>
      <div>
        <span className="price-primary">$200.452</span>
        <span className="price-secondary">$100.420</span>
      </div>
      <Button label="Agregar al carrito" cart={true} />
    </div>
  </div>
)

export default Card

import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './GridCard.scss'

const GridCard = ({ products, cartShop }) => (
  <div className="card-container">
    {products.length > 0 &&
      products.map(({ id, price, nameProduct, imageUrl }) => (
        <Card
          key={id}
          price={price}
          nameProduct={nameProduct}
          imageUrl={imageUrl}
          id={id}
          cartShop={cartShop}
        />
      ))}
  </div>
)

GridCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  cartShop: PropTypes.bool
}

GridCard.defaultProps = {
  cartShop: false
}

export default GridCard

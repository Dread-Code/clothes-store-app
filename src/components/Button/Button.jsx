import React from 'react'
import Proptypes from 'prop-types'
import './Button.scss'
import classNames from 'classnames'
import IconCart from '../../assets/icons/icon-cart.svg'

const Button = ({ label, onClick, type, cart }) => (
  <button
    type="button"
    className={classNames('a-core', {
      'a-core__button': true,
      [`a-core__button${type}`]: type
    })}
    onClick={onClick}
  >
    {cart && <IconCart />}
    <span>{label}</span>
  </button>
)

Button.propTypes = {
  label: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
  type: Proptypes.string,
  cart: Proptypes.bool
}

Button.defaultProps = {
  type: '-primary',
  cart: false
}

export default Button

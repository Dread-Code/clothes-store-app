import { CART_DELETE_CART } from '../types'

export const deleteCart = id => ({ type: CART_DELETE_CART, payload: id })

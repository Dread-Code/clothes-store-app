import { CART_ADD_CART } from '../types'

export const addCart = product => ({ type: CART_ADD_CART, payload: product })

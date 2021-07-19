import { CART_ADD_CART, CART_DELETE_CART } from '../types'

const initialState = []

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_CART:
      // state.push(payload)
      return [...state, payload]
    case CART_DELETE_CART:
      return state.filter(({ id }) => id !== payload)
    default:
      return state
  }
}

export default cartReducer

import { CART_ADD_CART } from '../types'

const initialState = {}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_CART:
      return { ...state, cart: [...state.cart, payload] }
    default:
      return state
  }
}

export default cartReducer

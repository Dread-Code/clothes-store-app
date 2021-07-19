import { CART_ADD_CART, CART_DELETE_CART } from '../types'

const initialState = {
  data: []
}

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_ADD_CART:
      state.data.push(payload)
      return state
    case CART_DELETE_CART:
      return state.data.filter(({ id }) => id !== payload)
    default:
      return state
  }
}

export default cartReducer

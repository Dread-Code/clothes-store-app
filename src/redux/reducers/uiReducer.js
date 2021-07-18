import { types } from '../types'

const initialState = {
  modalOPen: false
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UI_SHOW_MODAL:
      return { ...state, modalOPen: true }
    case types.UI_HIDE_MODAL:
      return { ...state, modalOPen: false }
    default:
      return state
  }
}

export default uiReducer

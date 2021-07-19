import { connect } from 'react-redux'
import { addCart } from './actions/addCart'

const mapStateToProps = state => ({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = {
  addCart
}

export default connect(mapStateToProps, mapDispatchToProps)

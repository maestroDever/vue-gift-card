import * as constants from './quantity-types'

export default {
  [constants.SET_QUANTITY] (state, quantity) {
    state.quantity = quantity
  }
}

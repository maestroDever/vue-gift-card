import * as constants from './billingData-types'

export default {
  [constants.SET_BILLING_DATA] (state, billingData) {
    state.billingData = billingData
  },
  [constants.SET_PAYMENT_METHOD] (state, paymentMethod) {
    state.paymentMethod = paymentMethod
  }
}

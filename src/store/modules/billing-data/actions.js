import * as constants from './billingData-types'
// import axios from 'axios'

export default {
  [constants.SET_BILLING_DATA] ({ commit }, value) {
    commit(constants.SET_BILLING_DATA, value)
  },
  [constants.SET_PAYMENT_METHOD] ({ commit }, value) {
    commit(constants.SET_PAYMENT_METHOD, value)
  }
}

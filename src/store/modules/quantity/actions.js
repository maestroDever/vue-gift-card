import * as constants from './quantity-types'
// import axios from 'axios'

export default {
  [constants.SET_QUANTITY] ({ commit }, value) {
    commit(constants.SET_QUANTITY, value)
  }
}

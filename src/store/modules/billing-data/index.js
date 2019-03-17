import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const initialState = {
  billingData: {},
  paymentMethod: ''
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations: mutations,
  actions: actions
}

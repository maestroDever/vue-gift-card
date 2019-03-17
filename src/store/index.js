import Vue from 'vue'
import Vuex from 'vuex'
import Quantity from './modules/quantity'
import BillingData from './modules/billing-data'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: {
    Quantity,
    BillingData
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from "./mutations"

import cart from "./modules/cart"

Vue.use(Vuex)

const state = {
    tmGoodsList: "",
    detailId: "",
    tabBarCon: "",
    tabCondition: false,
    bgdivCondition: false
}


// const mutations = {
    
// }

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    cart
  }
})
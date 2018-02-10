import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from "./mutations"
// import * as types from "./mutation-types"

// import tmList from "./modules/tmList"

Vue.use(Vuex)

const state = {
    tmGoodsList: "",
    detailId: "",
    tabBarCon: "",
    tabCondition: false
}


// const mutations = {
    
// }

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    
  }
})
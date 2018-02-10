import * as types from "../mutation-types"

const state = {
    tmGoodsList: ""
}

const getters = {

}

const actions = {
    setTmList({commit}, value){
        commit(types.RECEIVE_TMLIST, value)
    }
}

const mutations = {
    [types.RECEIVE_TMLIST](state, list) {
        state.tmGoodsList = list
    }
}

export default {
    
  }

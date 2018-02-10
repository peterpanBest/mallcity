import api from "../api/api"
import * as types from "./mutation-types"

export default {
    setTmList({commit}, value){
        commit(types.RECEIVE_TMLIST, value)
    },
    goToDetail({commit}, value){
        commit(types.DATADETAIL_GOODS)
    },
    tabBarChange({commit},value){
        commit(types.TABBAR_CHANGE,value)
    },
    showTabCondition({commit},value){
        commit(types.TABBAR_CONDITION,value)
    }
}


import * as types from './mutation-types'

export default {
    [types.RECEIVE_TMLIST](state, value) {
        state.tmGoodsList = value
    }, 
    [types.DATADETAIL_GOODS](state, value) {
        state.detailId = value
    },
    [types.TABBAR_CHANGE](state,value) {
        state.tabBarCon = value
    },
    [types.TABBAR_CONDITION](state,value) {
        state.tabCondition = value
    }
}
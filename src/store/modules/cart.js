import * as types from "../mutation-types"

const state = {
    cart: []
}

const getters = {
    
}

const actions = {
    addCart({commit}, value){
        commit(types.ADD_TO_CART, value)
    }
}

const mutations = {
    [types.ADD_TO_CART](state,product) {
        let pid = product.id
        const record = state.cart.find(p => p.id === pid) 
        if(!record){
            state.cart.push(product)
        }else{
            record.count = Number(record.count) + Number(product.count)
        }
        storage.setItem("cartProduct",product.nowPrice)
        console.log(JSON.stringify(state.cart))
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

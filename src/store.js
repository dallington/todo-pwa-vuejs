import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  list: []
}

const mutations = {
  setItem (state, item) {
    state.list.push(item)
  }
}

const actions = {
  setItem (state) {
    return state.list
  }
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})

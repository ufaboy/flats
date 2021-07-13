import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flatsArray: []
  },
  mutations: {
    setFlatsArray(state, payload) {
      state.flatsArray = payload
    }
  },
  actions: {
    setFlatsArray({commit}, payload) {
      commit('setFlatsArray', payload)
    }
  },
  modules: {
  }
})

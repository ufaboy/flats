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
    },
    setLikeOnFlat(state, index) {
      state.flatsArray[index].attributes.like = true
    },
    setDisLikeOnFlat(state, index) {
      state.flatsArray[index].attributes.like = false
    },
  },
  actions: {
    setFlatsArray({commit}, payload) {
      commit('setFlatsArray', payload)
    },
    toggleLikeOnFlat({commit, state}, index) {
      const flat = state.flatsArray[index]
      if (flat && flat.attributes) {
        switch (flat.attributes.like) {
          case false:
            commit('setLikeOnFlat', index)
            break;
          case true:
            commit('setDisLikeOnFlat', index)
            break;
        }
      }
    },
  },
  modules: {
  }
})

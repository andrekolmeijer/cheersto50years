import { createStore } from 'vuex'

export default createStore({
  state: {
      accessCode: '',
  },

  mutations: {
      SET_ACCESS_CODE(state, accessCode) {
          localStorage.setItem('accessCode', accessCode)
          state.accessCode = accessCode
      },
      INITIALISE_STORE(state) {
          if (localStorage.getItem('accessCode')) {
              state.accessCode = localStorage.getItem('accessCode')
          }
      }
  },

  actions: {
      setAccessCode({ commit }, accessCode) {
          commit('SET_ACCESS_CODE', accessCode)
      },
      initialiseStore({ commit }) {
          commit('INITIALISE_STORE')
      }
  },

  modules: {}
})

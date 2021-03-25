import { createStore } from 'vuex'

export default createStore({
  state: {
      accessCode: '',
      previousRouteName: ''
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
      },
      GET_PREVIOUS_ROUTE_NAME(state) {
          if (localStorage.getItem('previousRouteName') && localStorage.getItem('previousRouteName') !== 'undefined') {
              state.previousRouteName = localStorage.getItem('previousRouteName')
          }
      }
  },

  actions: {
      setAccessCode({ commit }, accessCode) {
          commit('SET_ACCESS_CODE', accessCode)
      },
      initialiseStore({ commit }) {
          commit('INITIALISE_STORE')
      },
      getPreviousRouteName({ commit }) {
          commit('GET_PREVIOUS_ROUTE_NAME')
      }
  },

  modules: {}
})

import { createStore } from 'vuex'
import { Attendees } from './Attendees'
import { Date } from './Date'

export default createStore({
  state: {
      accessCode: '',
      messageRead: false,
      previousRouteName: ''
  },

  mutations: {
      SET_ACCESS_CODE(state, accessCode) {
          localStorage.setItem('accessCode', accessCode)
          state.accessCode = accessCode
      },
      SET_MESSAGE_READ(state) {
          localStorage.setItem('messageRead', true)
          state.messageRead = true
      },
      INITIALISE_STORE(state) {
          if (localStorage.getItem('accessCode')) {
              state.accessCode = localStorage.getItem('accessCode')
          }
          if (localStorage.getItem('messageRead')) {
              state.messageRead = localStorage.getItem('messageRead')
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
      setMessageRead({ commit }) {
          commit('SET_MESSAGE_READ')
      },
      initialiseStore({ commit }) {
          commit('INITIALISE_STORE')
      },
      getPreviousRouteName({ commit }) {
          commit('GET_PREVIOUS_ROUTE_NAME')
      }
  },

  modules: {
      Attendees,
      Date
  }
})

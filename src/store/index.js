import { createStore } from 'vuex'
import { Attendees } from './Attendees'
import { Date } from './Date'

export default createStore({
  state: {
      accessCode: '',
      messageRead: false,
      messageReadApril: false,
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
      SET_MESSAGE_READ_APRIL(state) {
          localStorage.setItem('messageReadApril', true)
          state.messageReadApril = true
      },
      INITIALISE_STORE(state) {
          if (localStorage.getItem('accessCode')) {
              state.accessCode = localStorage.getItem('accessCode')
          }
          if (localStorage.getItem('messageRead')) {
              state.messageRead = localStorage.getItem('messageRead')
          }
          if (localStorage.getItem('messageReadApril')) {
              state.messageReadApril = localStorage.getItem('messageReadApril')
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
      setMessageReadApril({ commit }) {
          commit('SET_MESSAGE_READ_APRIL')
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

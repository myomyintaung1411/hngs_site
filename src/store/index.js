import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    myAccount: "",
    myPassowrd: ""
  },
  getters: {
    // login: this.state.login
    loginGetter: state => {
      return state.login
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

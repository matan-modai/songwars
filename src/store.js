import Vue from 'vue'
import Vuex from 'vuex'

const redirectUri = 'http://localhost:8081/about/' // `${window.location.origin}/about`
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',

    CLIENT_ID: '2d002a14b95a49928e8a2504fcfdd87f',
    CLIENT_SECRET: 'b8826bc4e64244eab390f2f255474819',
    REDIRECT_URI: redirectUri
  },

  getters: {
    clientId: state => state.CLIENT_ID,

    redirectUri: state => state.REDIRECT_URI,

    accessToken: state => state.accessToken
  },

  mutations: {
    SET_ACCESS_TOKEN: (state, token) => {
      debugger
      state.accessToken = token
    }
  },
  actions: {
    setAccessToken: ({ commit }, token) => {
      debugger
      commit('SET_ACCESS_TOKEN', token)
    }
  }
})

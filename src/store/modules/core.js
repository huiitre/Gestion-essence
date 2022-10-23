//!##################################//
//!              STATE               //
//!##################################//
const state = {
  apiUrl: '',
  protocol: ''
}

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getApiUrl(s) {
    return s.apiUrl
  },
  getProtocol(s) {
    return s.protocol
  }
}

//!##################################//
//!            MUTATIONS             //
//!##################################//
const mutations = {
  //* Setters
  setApiUrl(state, payload) {
    state.apiUrl = payload
  },
  setProtocol(state, payload) {
    state.protocol = payload
  }
}

//!##################################//
//!             ACTIONS              //
//!##################################//
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
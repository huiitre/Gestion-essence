//!##################################//
//!              STATE               //
//!##################################//
const state = {
  apiUrl: 'http://localhost:5050/api'
}

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getApiUrl(s) {
    return s.apiUrl
  }
}

//!##################################//
//!            MUTATIONS             //
//!##################################//
const mutations = {
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
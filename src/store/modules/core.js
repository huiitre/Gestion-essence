//!##################################//
//!              STATE               //
//!##################################//
const state = {
  currentPage: '',
  previousPage: ''
}

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getCurrentPage(state) {
    return state.currentPage
  },
  getPreviousPage(state) {
    return state.previousPage
  }
}

//!##################################//
//!            MUTATIONS             //
//!##################################//
const mutations = {
  setCurrentPage(state, page) {
    state.currentPage = page
  },
  setPreviousPage(state, page) {
    state.previousPage = page == '/login' ? '/' : page
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
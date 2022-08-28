//!##################################//
//!              STATE               //
//!##################################//
const state = {
  detailTransaction: {
    isOpen: false,
    isVisible: false,
  }
}

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getIsOpen(s) {
    return s.detailTransaction.isOpen
  },
  getIsVisible(s) {
    return s.detailTransaction.isVisible
  }
}

//!##################################//
//!            MUTATIONS             //
//!##################################//
const mutations = {
  getIsOpen(s) {
    s.detailTransaction.isOpen = !s.detailTransaction.isOpen
  },
  getIsVisible(s) {
    s.detailTransaction.isVisible = !s.detailTransaction.isVisible
  },
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
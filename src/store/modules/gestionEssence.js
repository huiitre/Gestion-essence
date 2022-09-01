//!##################################//
//!              STATE               //

import client from "@/services/axiosInstance"

//!##################################//
const state = {
  transactionsList: []
}

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getTransactionsList(s) {
    return s.transactionsList
  }
}

//!##################################//
//!            MUTATIONS             //
//!##################################//
const mutations = {
  setTransactionsList(s, data) {
    s.transactionsList = data
  }
}

//!##################################//
//!             ACTIONS              //
//!##################################//
const actions = {
  allFuelTransactions(store) {
    client.get('/transaction/essence/all')
      .then((r) =>  {
        console.log('response : ', r);
        store.commit('setTransactionsList', r.data)
      })
      .catch((e) => {
        console.log('error : ', e);
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
//!##################################//
//!              STATE               //

import client from "@/services/axiosInstance"
import axios from "axios"

//!##################################//
const state = {
  allConso: '',
  allPages: '',
  currentPage: 1,
  transactionsList: []
}

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getTransactionsList(s) {
    return s.transactionsList
  },
  getAllConso(s) {
    return s.allConso
  },
  getAllPages(s) {
    return s.allPages
  },
  getCurrentPage(s) {
    return s.currentPage
  }
}

//!##################################//
//!            MUTATIONS             //
//!##################################//
const mutations = {
  setTransactionsList(s, data) {
    s.transactionsList = data.result
    s.currentPage = data.currentPage
    s.allPages = data.allPages
    s.allConso = data.allConso
  }
}

//!##################################//
//!             ACTIONS              //
//!##################################//
const actions = {
  allFuelTransactions(store) {
    //! erreur 401 je comprends pas pourquoi
    /* client.get('/gestion-essence/list', { params: { page: store.state.currentPage } })
      .then((r) =>  {
        console.log('response : ', r.data);
        store.commit('setTransactionsList', r.data)
      })
      .catch((e) => {
        console.log('error : ', e);
      }) */

    const client = axios.create({
      baseURL: process.env.VUE_APP_ROOT_API,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    client.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('token')}`
    client.get('/gestion-essence/list', { params: { page: store.state.currentPage } })
      .then((r) => {
        console.log('response : ', r.data);
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
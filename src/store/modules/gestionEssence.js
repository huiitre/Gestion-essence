//!##################################//
//!              STATE               //

import { errorToast, spinnerToast, successToast } from "@/modules/common/components/toasts"
import client from "@/services/axiosInstance"
import axios from "axios"
import { clearToasts } from "mosha-vue-toastify"

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
    if (data.currentPage == 1) {
      s.transactionsList = data.result
      s.currentPage = Number(data.currentPage)
      s.allPages = data.allPages
      s.allConso = data.allConso
    } else {
      s.transactionsList = [...s.transactionsList, ...data.result]
      s.currentPage = Number(data.currentPage)
      s.allPages = data.allPages
      s.allConso = data.allConso
    }
  },
  setResetTransactionsList(s) {
    s.transactionsList = []
    s.currentPage = 1
    s.allPages = ''
    s.allConso = ''
  }
}

//!##################################//
//!             ACTIONS              //
//!##################################//
const actions = {
  allFuelTransactions(store, payload) {
    //! erreur 401 je comprends pas pourquoi
    /* client.get('/gestion-essence/list', { params: { page: store.state.currentPage } })
      .then((r) =>  {
        console.log('response : ', r.data);
        store.commit('setTransactionsList', r.data)
      })
      .catch((e) => {
        console.log('error : ', e);
      }) */
  
    if (store.state.currentPage < store.state.allPages || store.state.allPages == '') {
      const client = axios.create({
        baseURL: process.env.VUE_APP_ROOT_API,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      spinnerToast('Chargement des données en cours ...')
      //* si currentPage est inf au max de pages, on incrémente de 1, sinon on laisse la valeur par défaut
      // store.state.currentPage < store.state.allPages ? store.state.currentPage = store.state.currentPage + 1 : store.state.currentPage;
      let scroll = false;
      if (payload !== undefined) {
        scroll = payload.scroll;
      }

      if (scroll && store.state.currentPage < store.state.allPages) {
        store.state.currentPage = store.state.currentPage + 1
      }

      client.defaults.headers.common.authorization = `Bearer ${localStorage.getItem('token')}`
      client.get('/gestion-essence/list', { params: { page: store.state.currentPage } })
        .then((r) => {
          store.commit('setTransactionsList', r.data)
        })
        .catch((e) => {
          console.log('error : ', e);
          errorToast('Une erreur s\'est produite lors du chargement des données')
        })
        .finally(() => {
          clearToasts()
        })
    }
  },
  resetTransactionsList(store) {
    store.commit('setResetTransactionsList')
    store.dispatch('allFuelTransactions')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
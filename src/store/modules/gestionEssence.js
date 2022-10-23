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
    if (data.currentPage == 1)
      s.transactionsList = data.result
    else
      s.transactionsList = [...s.transactionsList, ...data.result]

    s.currentPage = Number(data.currentPage)
    s.allPages = data.allPages
    s.allConso = data.allConso
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

  /**
   * Affiche la liste des transactions
   * Gère la pagination également avec le payload.scroll et le state
   * @param {object} store 
   * @param {object} payload 
   */
  allFuelTransactions(store, payload) {
    if (store.state.currentPage < store.state.allPages || store.state.allPages == '') {
      //* on lance le spinner
      spinnerToast('Chargement de la liste en cours ...')

      //* on vérifie le payload
      let scroll = false
      if (payload !== undefined)
        scroll = payload.scroll

      //* si scroll vaut true && que la page courante est inférieur à toutes les pages
      //* on incrémente de 1
      if (scroll && store.state.currentPage < store.state.allPages)
        store.state.currentPage = store.state.currentPage + 1

      client.get('/gestion-essence/list', { params: { page: store.state.currentPage } })
      .then((r) =>  {
        store.commit('setTransactionsList', r.data)
      })
      .catch((e) => errorToast('Une erreur s\'est produite lors du chargement des données'))
      .finally(() => clearToasts())
    }
  },

  /**
   * Reset la liste des transactions
   * @param {object} store 
   */
  resetTransactionsList(store) {
    store.commit('setResetTransactionsList')
    store.dispatch('allFuelTransactions')
  },

  /**
   * requête POST qui permet d'ajouter une transaction
   * @param {object} store 
   * @param {object} payload 
   */
  addTransaction(store, payload) {
    
    spinnerToast('Ajout en cours ...')

    client.post('/gestion-essence/add', payload)
    .then((r) => {
      successToast('L\'ajout a bien été effectué !')
    })
    .catch((e) => {
      if (e.response.data.msg) {
        //* on parcours le tableau des messages et on en affiche le contenu dans la popup
        for (let val of e.response.data.msg)
          errorToast(val)
      } else {
        errorToast('Une erreur s\'est produite lors du chargement des données')
      }
    })
    .finally(() => {
      clearToasts()
    })
  },

  /**
   * requête DELETE qui supprime des transactions
   * @param {object} store 
   * @param {object} payload 
   */
  deleteTransaction(store, payload) {
    const list = payload.list
    const callback = payload.callback

    const data = {
      list: list
    }

    spinnerToast('Suppression en cours ...')

    client.delete('/gestion-essence/delete', { data })
    .then((r) => {
      console.log('%c gestionEssence.js #142 || res : ', 'background:red;color:#fff;font-weight:bold;', r);
      successToast('La suppression a bien été effectué')
      callback()
    })
    .catch((e) => {
      if (e.response.data.msg) {
        for (let val of e.response.data.msg)
          errorToast(val)
      } else {
        errorToast('Une erreur s\'est produite lors de la suppression')
      }
    })
    .finally(() => {
      clearToasts()
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
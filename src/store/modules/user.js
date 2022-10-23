import { errorToast, spinnerToast, successToast } from '@/modules/common/components/toasts';
// import axios from 'axios';
import { clearToasts } from 'mosha-vue-toastify';
import router from '@/router';
import client from '@/services/axiosInstance';
import axios from 'axios';

import core from '@/store/modules/core';

//!##################################//
//!              STATE               //
//!##################################//
const state = {
  user: {},
	isLogged: false,
  loadingCheckUser: false,
};

//!##################################//
//!            MUTATIONS             //
//!##################################//
const mutations = {
	logout() {
		this.commit('User/setResetUser');
    localStorage.removeItem('config')
	},

	//* Setters
  setLoadingCheckUser(state, bool) {
    state.loadingCheckUser = bool
  },
  setUser(state, payload) {
    state.user = payload
    state.isLogged = true
	},
  setResetUser(state) {
    state.user = {};
    state.isLogged = false;
  }
};

//!##################################//
//!             ACTIONS              //
//!##################################//
const actions = {
  //! Connexion utilisateur
  login(store, payload) {

    if (payload.username !== '' && payload.password !== '') {
      //* On clear tous les autres toast et on affiche le toast loading
      clearToasts();
      spinnerToast('Connexion en cours ...');

      client.post('/login_check', payload)
        .then((res) => {

          //* On affiche le toast success
          successToast('Vous êtes connecté !');

          //* Stockage du token en LS
          //* stockage de l'apiurl et du protocol en LS
          const { token } = res.data;
          const instance = { apiurl: core.state.apiUrl, protocol: core.state.protocol, token: token }
          localStorage.setItem('config', JSON.stringify(instance))

          //* Stockage des informations de l'utilisateur dans le store
          store.commit('setUser', {
            token: res.data.token,
            username: res.data.data.email,
            name: res.data.data.name,
          })
          router.push('/')
        })
        .catch((e) => {
          if (e.response.data) {
            errorToast(e.response.data.msg)
          } else {
            errorToast('Une erreur s\'est produite')
          }
        })
        .finally(() => {
          clearToasts();
        });
    } else {
      errorToast('Veuillez remplir tous les champs')
    }
  },
};

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getName(state) {
    return state.user.name
  },
  getLoadingCheckUser(state) {
    return state.loadingCheckUser
  },
  getIsLogged(state) {
    return state.isLogged
  }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};

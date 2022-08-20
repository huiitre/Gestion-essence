import { errorToast, spinnerToast, successToast } from '@/modules/common/components/toasts';
// import axios from 'axios';
import { clearToasts } from 'mosha-vue-toastify';
import router from '@/router';
import client from '@/services/axiosInstance';

//!##################################//
//!              STATE               //
//!##################################//
const state = {
  user: {},
	isLogged: false,
  loadingCheckUser: false,
};

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getName(state) {
    return state.user.name
  },
  getEmail(state) {
    return state.user.username
  },
  getLoadingCheckUser(state) {
    return state.loadingCheckUser
  },
  getIsLogged(state) {
    return state.isLogged
  }
};

//!##################################//
//!            MUTATIONS             //
//!##################################//
const mutations = {
	initUser(state, payload) {
    state.user = payload
    state.isLogged = true
	},
	logout(state) {
		state.user = {}
    state.isLogged = false
    localStorage.removeItem('token')
	},

	//* Setters
  setLoadingCheckUser(state, bool) {
    state.loadingCheckUser = bool
  }
};

//!##################################//
//!             ACTIONS              //
//!##################################//
const actions = {
  //! Connexion utilisateur
  login(store, payload) {
    //* On clear tous les autres toast et on affiche le toast loading
    clearToasts();
    spinnerToast('Connexion en cours ...');

    console.log('payload : ', payload);

    client.post('/login_check', payload)
      .then((res) => {

        //* On affiche le toast success
        successToast('Vous êtes connecté !');

        //* Stockage du token en LS
        const { token } = res.data;
        localStorage.setItem('token', token);

        //* Stockage des informations de l'utilisateur dans le store
        store.commit('initUser', {
          token: res.data.token,
          username: res.data.data.email,
          name: res.data.data.name,
        })
        router.push('/')
      })
      .catch((e) => {
        if (e.response.data.message == undefined) {
          errorToast('Une erreur est survenu, merci de réessayer ultérieurement');
        } else {
          errorToast(e.response.data.message);
        }
      })
      .finally(() => {
        clearToasts();
      });
  },
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};

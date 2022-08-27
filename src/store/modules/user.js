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
//!            MUTATIONS             //
//!##################################//
const mutations = {
	initUser(state, payload) {
    state.user = payload
    state.isLogged = true
	},
	reset(state) {
		state.token = '';
		state.isLogged = false;
		state.username = '';
		state.name = '';
	},
	logout() {
		this.commit('User/setToken', '');
	},

	//* Setters
	setToken(state, token) {
		state.token = token;
		localStorage.setItem('token');
	},
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
        console.log('e : ', e);
        if (e.response.data == undefined) {
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

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {
  getUser(state) {
    return state.user
  },
  getLoadingCheckUser(state) {
    return state.loadingCheckUser
  }
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};

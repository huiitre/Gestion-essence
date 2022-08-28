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
	logout() {
		this.commit('User/setResetUser');
    localStorage.removeItem('token')
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
        store.commit('setUser', {
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

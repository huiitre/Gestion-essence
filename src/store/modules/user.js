import { errorToast, spinnerToast, successToast } from '@/modules/common/components/toasts';
import axios from 'axios';
import { clearToasts } from 'mosha-vue-toastify';
import router from '@/router';

const client = axios.create({
	baseURL: process.env.VUE_APP_ROOT_API,
	headers: {
    Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

//!##################################//
//!              STATE               //
//!##################################//
const state = {
  user: {},
	isLogged: false,
  count: 1,
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
    state.count = 1;
	},
	logout() {
		this.commit('User/setToken', '');
	},
  test(state, payload) {
    state.count += payload.nb;
  },

	//* Setters
	setToken(state, token) {
		state.token = token;
		localStorage.setItem('token');
	},
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
        if (e.response.data.message == undefined) {
          errorToast('Une erreur est survenu, merci de réessayer ultérieurement');
        } else {
          errorToast(e.response.data.message);
        }
      })
      .finally(() => {
        clearToasts();
      });

    /* client.post('/login_check', config)
      .then((res) => {
        console.log('response : ', res);
        commit('initUser');
      })
      .catch((e) => {
        console.log('error : ', e.response);
      })
      .finally((evt) => {
        console.log('evenement : ', evt);
      }); */
  }
};

//!##################################//
//!             GETTERS              //
//!##################################//
const getters = {};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};

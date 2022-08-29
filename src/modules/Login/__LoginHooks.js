import axios from "axios";
import { clearToasts  } from 'mosha-vue-toastify'
import { errorToast, spinnerToast, successToast } from '@/modules/common/components/toasts.js'

const client = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  login: async (credentials) => {
    //* On clear tous les autres toast et on affiche le toast loading
    clearToasts();
    spinnerToast('Connexion en cours ...');

    return await client.post('/login_check', credentials)
      .then ((res) => {
        //* On affiche le toast success
        successToast('Vous êtes connecté !');

        //* stockage du token en LS
        //? est-ce qu'il y a un localstorage sous android ?
        const { token } = res.data;
        localStorage.setItem('token', token);

        //TODO Mettre en place le store et stocker les infos de l'utilisateur dedans

      })
      .catch((e) => {
        // console.log('error : ', e.response.data.message);
        if (!e.response.data) {
          errorToast('Une erreur est survenu, merci de réessayer ultérieurement');
        }
        errorToast(e.response.data.message);
      })
      .finally(() => {
        clearToasts();
      });
  }
}
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
    spinnerToast('Connexion en cours ...');
    return await client.post('/login_check', credentials)
      .then ((res) => {
        console.log('res : ', res.data);
        successToast('Vous êtes connecté !');

      })
      .catch((e) => {
        console.log('error : ', e.response.data.message);
        errorToast(e.response.data.message);
      })
      .finally(() => {
        clearToasts();
      });
  }
}
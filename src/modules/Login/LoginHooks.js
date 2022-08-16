import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  login: async (credentials) => {
    return await client.post('/login_check', credentials)
      .then ((res) => {
        console.log('res : ', res.data);
      })
  }
}
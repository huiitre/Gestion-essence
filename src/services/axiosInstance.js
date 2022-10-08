import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const token = localStorage.getItem('token');

if (token) {
  client.defaults.headers.common.authorization = `Bearer ${token}`
}

export default client;

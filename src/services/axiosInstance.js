import axios from "axios";

const client = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    'Content-Type': 'application/json',
  }
})

/* const token = localStorage.getItem('token');
console.log('%c axiosInstance.js #8 || token instance : ', 'background:red;color:#fff;font-weight:bold;', token);
if (token) {
  client.defaults.headers.common['authorization'] = `Bearer ${token}`
} */

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.authorization = token ? `Bearer ${token}` : '';
  return config
})

export default client;

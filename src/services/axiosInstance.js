import axios from "axios";
import core from '@/store/modules/core'

const client = axios.create({
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
  const json = localStorage.getItem('config')
  if (json) {
    const conf = JSON.parse(json);
    config.headers.authorization = `Bearer ${conf.token}`;
  } else {
    config.headers.authorization = ''
  }
  
  config.baseURL = core.state.protocol + '://' + core.state.apiUrl + '/api'
  return config
})

export default client;

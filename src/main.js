import { createApp } from 'vue'

import App from './App.vue'

import router from '@/router'

import store from '@/store'

import { VueQueryPlugin } from 'vue-query'

const app = createApp(App)

app.use(store)

app.use(VueQueryPlugin)

app.use(router)

app.mount('#app')

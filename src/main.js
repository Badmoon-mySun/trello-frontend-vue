import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/style.scss'
import store from './store'
import axios from "axios"
import {BACKEND_API_URL} from "./utils/config";
import createCustomRouter from "./router";
import createCustomAxios from "./utils/customAxios";

const app = createApp(App)

const $axios = createCustomAxios(store)

const router = createCustomRouter(store, $axios)

const rootComponent =app.use(store)
    .use(router)
    .mount('#app')

store.$axios = $axios
app.config.globalProperties.$axios = $axios



const accessToken = localStorage.getItem('accessToken')
const refreshToken = localStorage.getItem('refreshToken')

if (refreshToken) {
    store.dispatch('auth/packUp', {
        accessToken: accessToken,
        refreshToken: refreshToken,
        rememberMe: false
    })
}


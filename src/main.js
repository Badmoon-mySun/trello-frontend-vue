import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/style.scss'
import router from './router'
import store from './store'
import axios from "axios"
import {BACKEND_API_URL} from "./utils/config";

const app = createApp(App)

app.config.devtools = true

const rootComponent =app .use(store)
    .use(router)
    .mount('#app')




const axiosElem = axios.create({
    baseURL: BACKEND_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

const token = localStorage.getItem('accessToken')

if (token) {
    axiosElem.defaults.headers.Authorization = 'Bearer ' + token
}

store.$axios = axiosElem
app.config.globalProperties.$axios = axiosElem

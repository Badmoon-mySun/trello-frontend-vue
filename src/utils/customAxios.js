import axios from "axios";
import {BACKEND_API_URL} from "./config";


function createCustomAxios(store) {
    const customAxios = axios.create({
        baseURL: BACKEND_API_URL,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let flag = false

    customAxios.interceptors.response.use(
        response => response,
        err => {
            const code = parseInt(err.response && err.response.status)
            let refreshUrl = 'auth/refresh'

            let originalRequest = err.config

            if (code === 401 && originalRequest.url === refreshUrl) {
                store.dispatch('auth/logout')
                return
            }

            if (code === 401) {
                originalRequest.__isRetryRequest = true

                let refreshToken = store.getters['auth/getRefreshToken']
                delete customAxios.defaults.headers.Authorization

                return new Promise((resolve, _) => {
                    customAxios.post(refreshUrl, { refreshToken: refreshToken })
                        .then(response => {
                            store.dispatch('auth/packUp', {
                                accessToken: response.data.accessToken,
                                refreshToken: response.data.refreshToken,
                                rememberMe: !!localStorage.getItem('accessToken')
                            })

                            originalRequest.headers.Authorization = customAxios.defaults.headers.Authorization

                            resolve(response)
                        })
                        .catch(() => store.dispatch('auth/logout'))
                }).then(() =>
                    customAxios(originalRequest)
                    .catch(() => store.dispatch('auth/logout'))
                )
            }
        }
    )

    return customAxios
}


export default createCustomAxios
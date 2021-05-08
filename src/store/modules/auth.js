import axios from "axios";

export default {
    namespaced: true,

    state: {
        accessToken: null,
        refreshToken: null,
    },
    mutations: {
        SET_ACCESS_TOKEN(state, value) {
            state.accessToken = value
        },
        SET_REFRESH_TOKEN(state, value) {
            state.refreshToken = value
        },
    },
    actions: {
        async singIn({ dispatch }, credentials) {
            let response = await this.$axios.post('auth/signin', JSON.stringify(credentials))

            let data = response.data

            dispatch('attempt', data.accessToken, data.refreshToken, credentials.rememberMe)
        },
        async attempt(context, accessToken, refreshToken, remember) {
            context.commit('SET_ACCESS_TOKEN', accessToken)
            context.commit('SET_REFRESH_TOKEN', refreshToken)

            this.$axios.defaults.headers.Authorization = 'Bearer ' + accessToken

            if (remember) {
                await context.dispatch('saveLocal')
            }
        },
        logout(context) {
            delete axios.defaults.headers.Authorization

            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')

            context.commit('SET_REFRESH_TOKEN', null)
            context.commit('SET_ACCESS_TOKEN', null)
            context.commit('SET_USER', null)
        },
        saveLocal({getters}) {
            localStorage.setItem('accessToken', getters.getAccessToken)
            localStorage.setItem('refreshToken', getters.getRefreshToken)
        },
        isAuthorized({getters}) {
            return getters.getAccessToken !== undefined
                        && getters.getAccessToken !== null
        }
    },
    getters: {
        getAccessToken(state) {
            return state.accessToken
        },
        getRefreshToken(state) {
            return state.refreshToken
        }
    }
}
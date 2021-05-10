export default {
    namespaced: true,

    state: {
        accessToken: null,
        refreshToken: null,
        rememberMe: false
    },
    mutations: {
        SET_ACCESS_TOKEN (state, value) {
            state.accessToken = value
        },
        SET_REFRESH_TOKEN (state, value) {
            state.refreshToken = value
        },
        SET_REMEMBER_ME (state, value) {
            state.rememberMe = value
        }
    },
    actions: {
        async singIn({ dispatch }, credentials) {
            let response = await this.$axios.post('auth/signin', JSON.stringify(credentials))

            let data = response.data

            dispatch('packUp', {
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
                rememberMe: credentials.rememberMe
            })
        },
        async packUp(context, payload) {
            console.log('access = ' + payload.accessToken)
            console.log('refresh = ' + payload.refreshToken)
            context.commit('SET_ACCESS_TOKEN', payload.accessToken)
            context.commit('SET_REFRESH_TOKEN', payload.refreshToken)

            this.$axios.defaults.headers.Authorization = 'Bearer ' + payload.accessToken

            if (payload.rememberMe) {
                context.commit('SET_REMEMBER_ME', payload.rememberMe)
                await context.dispatch('saveLocal')
            }
        },
        logout(context) {
            delete this.$axios.defaults.headers.Authorization

            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')

            context.commit('SET_REFRESH_TOKEN', null)
            context.commit('SET_ACCESS_TOKEN', null)
            context.commit('SET_ACCESS_TOKEN', false)
        },
        saveLocal({getters}) {
            localStorage.setItem('accessToken', getters.getAccessToken)
            localStorage.setItem('refreshToken', getters.getRefreshToken)
        },
        isAuthorized({getters}) {
            return !!getters.getAccessToken;
        }
    },
    getters: {
        getAccessToken(state) {
            return state.accessToken
        },
        getRefreshToken(state) {
            return state.refreshToken
        },
        getRememberMe(state) {
            return state.rememberMe
        }
    }
}
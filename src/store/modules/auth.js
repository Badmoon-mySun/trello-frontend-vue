import axios from "axios";

export default {
    namespaced: true,

    state: {
        accessToken: null,
        refreshToken: null,
        user: null
    },
    mutations: {
        SET_ACCESS_TOKEN(state, value) {
            state.accessToken = value
        },
        SET_REFRESH_TOKEN(state, value) {
            state.refreshToken = value
        },
        SET_USER (state, user) {
            state.user = user
        }
    },
    actions: {
        async singIn({ dispatch }, credentials) {
            let config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }

            try {
                let response = await axios.post('http://localhost:8888/api/auth/signin', JSON.stringify(credentials), config)

                let data = response.data

                if (dispatch('attempt', data.accessToken, data.refreshToken)) {
                    return true
                }
            } catch (ignore) {}

            return false
        },

        async attempt(context, accessToken, refreshToken) {
            context.commit('SET_ACCESS_TOKEN', accessToken)

            try {
                let response = await axios.get('http://localhost:8888/api/auth/me', context.getters.getAuthInHeaders)

                context.commit('SET_REFRESH_TOKEN', refreshToken)
                context.commit('SET_USER', response)

                return true
            } catch (ex) {
                console.error('failed to get user')

                context.commit('SET_REFRESH_TOKEN', null)
                context.commit('SET_ACCESS_TOKEN', null)
                context.commit('SET_USER', null)

                return false
            }
        },
        isAuthorization(context) {
            return context.getters.getAccessToken !== undefined
                        && context.getters.getAccessToken !== null
        }

    },
    getters: {
        getAccessToken(state) {
            return state.accessToken
        },
        getRefreshToken(state) {
            return state.refreshToken
        },
        getUser(state) {
            return state.user
        },
        getAuthInHeaders(state) {
            return {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + state.accessToken
                }
            }
        }
    }
}
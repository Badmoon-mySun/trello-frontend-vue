import store from "../index";

export default {
    namespaced: true,

    state: {
        id: null,
        fullName: null,
        username: null,
        email: null
    },
    mutations: {
        SET_ID (state, id) {
            state.id = id
        },
        SET_FULL_NAME (state, fullName) {
            state.fullName = fullName
        },
        SET_USERNAME (state, username) {
            state.username = username
        },
        SET_EMAIL (state, email) {
            state.email = email
        }
    },
    actions: {
        async requestUser({dispatch}) {
            await this.$axios.get('user/me')
                .then(response => dispatch('packUp', response.data))
                .catch(error => {
                    if (error.response && error.response.status === 401) {
                        store.dispatch('auth/logout')
                    } else {
                        throw error
                    }
                })
        },
        packUp({commit}, payload) {
            commit('SET_ID', payload.id)
            commit('SET_EMAIL', payload.email)
            commit('SET_USERNAME', payload.username)
            commit('SET_FULL_NAME', payload.fullName)
        },
        async getNameOrRequest({getters, dispatch}) {
            if (!getters.getFullName) {
                await dispatch('requestUser')
            }

            return getters.getFullName
        }
    },
    getters: {
        getId(state) {
            return state.id
        },
        getEmail(state) {
            return state.email
        },
        getUsername(state) {
            return state.username
        },
        getFullName(state) {
            return state.fullName
        }
    }
}
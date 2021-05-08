import axios from "axios";

export default {
    namespaced: true,

    state: {
        user: null
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        }
    },
    actions: {
        async requestUser(context) {
            let response = await axios.get('auth/me')

            context.commit('SET_USER', response)
        },
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
}
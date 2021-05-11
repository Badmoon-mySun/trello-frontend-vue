export default {
    namespaced: true,

    state: {
        id: null,
        title: null,
        background: null,
        members: [],
        cardLists: [],

    },
    mutations: {
        SET_ID (state, id) {
            state.id = id
        },
        SET_TITLE (state, title) {
            state.title = title
        },
        SET_BACKGROUND (state, background) {
            state.background = background
        },
        SET_MEMBERS (state, members) {
            state.members = members
        },
        SET_CARD_LISTS (state, cardLists) {
            state.cardLists = cardLists
        }
    },
    actions: {
        async requestBoard({commit, getters}, id) {
            if (!id) {
                id = getters.getId
            }
            let response = await this.$axios.get('board/' + id)
            let board = response.data

            console.log(board)

            commit('SET_ID', board.id)
            commit('SET_TITLE', board.title)
            commit('SET_BACKGROUND', board.background)
            commit('SET_MEMBERS', board.members)
            commit('SET_CARD_LISTS', board.cardLists)
        },
        async createList({dispatch}, payload) {
            await this.$axios.post('list', JSON.stringify(payload))

            dispatch('requestBoard')
        },
        async createCard({dispatch}, payload) {
            console.log(payload)
            await this.$axios.post('card', JSON.stringify(payload))
                .then(r => console.log(r))

            dispatch('requestBoard')
        },
        getCardById({getters}, id) {
            let result = null

            getters.getCardLists.forEach(list => {
                list.cards.forEach(card => {
                    if (card.id == id) {
                        console.log(card)
                        result = card
                    }
                })
            })

            return result
        },
        async updateCard({dispatch}, card) {
            await this.$axios.put('card', card)

            dispatch('requestBoard')
        }
    },
    getters: {
        getId(state) {
            return state.id
        },
        getCardLists(state) {
            return state.cardLists
        },
        getTitle(state) {
            return state.title
        },
        getMembers(state) {
            return state.members
        }
    }
}
import FormData from 'form-data'


export default {
    namespaced: true,

    state: {
        boards: null
    },
    mutations: {
        SET_BOARDS (state, boards) {
            state.boards = boards
        }
    },
    actions: {
        async requestBoards(context) {
            let response = await this.$axios.get('board/all')
            context.commit('SET_BOARDS', response.data)
        },
        async createBoard({dispatch}, payload) {
            await this.$axios.post('board', JSON.stringify({'title': payload.title}))
                .then(response => {
                    console.log(response)

                    if (payload.background) {
                        let formData = new FormData()
                        let boardId = response.data.id

                        formData.append('background', payload.background)

                        this.$axios.post('board/' + boardId + '/background', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        })
                    }
                })


            dispatch('requestBoards')
        }
    },
    getters: {
        getBoards(state) {
            return state.boards
        }
    }
}
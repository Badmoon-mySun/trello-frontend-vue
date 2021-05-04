export default {
    namespaced: true,

    state: {
        id: 123123,
        name: 'Сайт "сотка"',
        status: 'ACTIVE',
        members: [
            {
                id: 1,
                fullName: 'Anvar',
                username: 'badmoon666',
                email: 'anvar00755@mail.ru',
            }
        ],
        cardLists: [
            {
                id: 123123123,
                title: 'Полезное',
                status: 'ACTIVE',
                cards: [
                    {
                        images: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jobZYFa1YQSJPHTdLLp2MQHaEc%26pid%3DApi&f=1',
                        title: 'HELLO',
                        position: 2048,
                        members: [],
                        status: 'ACTIVE',
                        description: 'hello, this is description'
                    },
                ]
            },
            {
                id: 123123123,
                title: 'Полезное',
                status: 'ACTIVE',
                cards: [
                    {
                        images: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jobZYFa1YQSJPHTdLLp2MQHaEc%26pid%3DApi&f=1',
                        title: 'HELLO',
                        position: 2048,
                        members: [],
                        status: 'ACTIVE',
                        description: 'hello, this is description'
                    },
                ]
            }
        ],

    },
    getters: {
        getCardLists(state) {
            return state.cardLists
        },
        getName(state) {
            return state.name
        },
        getMembers(state) {
            return state.members
        }

    },
    modules: {

    }
}
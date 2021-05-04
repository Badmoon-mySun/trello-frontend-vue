import { createStore } from 'vuex'
import auth from './modules/auth'
import board from "./modules/board";

const store = createStore({
    modules: {
        auth: auth,
        board: board
    }
})

export default store
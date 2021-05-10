import { createStore } from 'vuex'
import auth from './modules/auth'
import board from "./modules/board";
import user from "./modules/user";
import home from "./modules/home";

const store = createStore({
    modules: {
        auth: auth,
        board: board,
        user: user,
        home: home
    }
})

export default store
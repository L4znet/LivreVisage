import { createStore } from 'vuex'
import feed from "./feed";
import users from "./users";

const store = createStore({
    modules: {
        feed, users
    }
})
export default store
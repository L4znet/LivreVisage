import { createStore } from 'vuex'
import feed from "./feed";

const store = createStore({
    modules: {
        feed
    }
})
export default store
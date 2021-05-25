import axios from 'axios'
//import router from '../router'

const feed = {
    namespaced: true,

    state(){
        return {
            feed: {}
        }
    },

    getters:{
        getFeedPost(state){
            return state.feed
        }
    },

    mutations:{
        UPDATE_FEED(state, payload){
            state.feed = payload
        }
    },

    actions:{
        async getAllPosts(context){
            const url = "https://livrevisage-c44bb-default-rtdb.europe-west1.firebasedatabase.app/feed.json";

            const firebaseResponse = await axios.get(url);

            context.commit('UPDATE_FEED', firebaseResponse.data);
        }
    },

}

export default feed;
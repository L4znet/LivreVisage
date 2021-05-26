import axios from 'axios'
import router from '../router'

const feed = {
    namespaced: true,

    state(){
        return {
            feed: {},
            field_vue:''
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
        },
        UPDATE_FIELD_VALUE(state, payload){
            state.field_vue = payload
        }
    },

    actions:{
        async getAllPosts(context){
            const url = "https://livrevisage-c44bb-default-rtdb.europe-west1.firebasedatabase.app/feed.json";

            const firebaseResponse = await axios.get(url);

            context.commit('UPDATE_FEED', firebaseResponse.data);
        },

        async deleteItem(store, id) {
            const url = `https://livrevisage-c44bb-default-rtdb.europe-west1.firebasedatabase.app/feed`;
            try {
                const response = await axios.delete(`${url}/${id}.json`);

                if(response.statusText !== 'OK') {
                    throw new Error("Une erreur est survenue !");
                }
                store.dispatch('getAllPosts');
            } catch(error) {
                alert(error.message);
            }
        },

        async addPost(context, payload){
            const url = 'https://livrevisage-c44bb-default-rtdb.europe-west1.firebasedatabase.app/feed.json';
            const item = { content: payload.content, author_id: payload.author_id, author_name: payload.author_name };
            try{
                const response = await axios.post(url, item);
                if(response.statusText === 'OK') {
                    context.commit('UPDATE_FIELD_VALUE', '');
                    router.push('/');
                }
            } catch (e) {
                console.log(e);
            }
        }
    },

}

export default feed;
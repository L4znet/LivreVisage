import axios from 'axios'
import router from '../router'

const feed = {
    namespaced: true,

    state(){
        return {
            feed: {},
            userConnected:null,
            content:''
        }
    },

    getters:{
        getFeedPost(state){
            return state.feed
        },
        getUsername(state){
            if(!state.userConnected){
                return "";
            }
            return state.userConnected.username
        },
        getId(state){
            if(!state.userConnected){
                return "";
            }
            return state.userConnected.id
        }
    },

    mutations:{
        UPDATE_FEED(state, payload){
            state.feed = payload
        },
        UPDATE_USER_CONNECT(state, payload){
            state.userConnected = payload
        },
        UPDATE_CONTENT_VALUE(state, payload){
            state.content = payload
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

        async updateItem(store, post) {
          const url = `https://livrevisage-c44bb-default-rtdb.europe-west1.firebasedatabase.app/feed`;
          try {

            const newContent = {
              author_id: post[1],
              author_name: post[2],
              content: post[3]
            };
            
            const response = await axios.put(`${url}/${post[0]}.json`, newContent);

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
                    router.push('/');
                    context.dispatch('getAllPosts');
                    context.commit('UPDATE_CONTENT_VALUE', '');
                }
            } catch (e) {
                console.log(e);
            }
        },

        loadConnected(context){
            const userConnected = localStorage.getItem('userConnected')

            context.commit('UPDATE_USER_CONNECT', JSON.parse(userConnected));
        },

        updateContentValue(context, payload){
           context.commit('UPDATE_CONTENT_VALUE', payload);
        }
    },

}

export default feed;
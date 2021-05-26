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
            const url = "https://livrevisage-506a7-default-rtdb.europe-west1.firebasedatabase.app/feed.json";

            try {
                const firebaseResponse = await axios.get(url);

                context.commit('UPDATE_FEED', firebaseResponse.data);

                if(firebaseResponse.statusText !== 'OK') {
                    throw new Error("Une erreur est survenue !");
                }
            } catch(error) {
                alert(error.message);
            }
        },
        async triggerDelete(store, id) {
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
        }
    },

}

export default feed;
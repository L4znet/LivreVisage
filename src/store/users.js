import axios from "axios";
import router from "../router";

const users = {
    namespaced: true,

    state(){
        return {
            users: {},
            userConnected:{}
        }
    },

    getters:{
        getUsers(state){
            return state.users
        }
    },

    mutations:{
        UPDATE_USERS_LIST(state, payload){
            state.users = payload
        },
        UPDATE_CONNECTED_USER(state, payload){
            state.userConnected = payload
        }
    },

    actions:{
        async getAllUsers(context){
            const url = "https://livrevisage-c44bb-default-rtdb.europe-west1.firebasedatabase.app/users.json";

            const firebaseResponse = await axios.get(url);

            context.commit('UPDATE_USERS_LIST', firebaseResponse.data);
        },

        async addUser(context, payload){
            const url = 'https://livrevisage-c44bb-default-rtdb.europe-west1.firebasedatabase.app/users.json';
            const item = { username: payload.username };
            try{
                const response = await axios.post(url, item);
                if(response.statusText === 'OK') {
                    router.push('/users');
                   context.dispatch('getAllUsers');
                }
            } catch (e) {
                console.log(e);
            }
        },
        connectUser(context, payload){
            const userConnected = { username:payload.username,id:payload.id };
            localStorage.setItem('userConnected', userConnected);

            context.commit('UPDATE_CONNECTED_USER', userConnected);
        },

        disconnectUser(context){
            localStorage.removeItem('userConnected');
            context.commit('UPDATE_CONNECTED_USER', '');
        }
    },

}

export default users;
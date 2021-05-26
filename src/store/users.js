import axios from "axios";
import router from "../router";

const users = {
    namespaced: true,

    state(){
        return {
        }
    },

    getters:{

    },

    mutations:{

    },

    actions:{
        async addUser(context, payload){

            console.log(payload)



            const url = 'https://livrevisage-c44bb-default-rtdb.europe-west1.firebasedatabase.app/users.json';
            const item = { username: payload.username };
            try{
                const response = await axios.post(url, item);
                if(response.statusText === 'OK') {
                    router.push('/users');
                  //  context.dispatch('getAllPosts');
                }
            } catch (e) {
                console.log(e);
            }
        }
    },

}

export default users;
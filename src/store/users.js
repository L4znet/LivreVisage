

const users = {
    namespaced: true,

    state(){
        return {
            users: [
                {
                    id:"1",
                    username:'Laznet'
                },
                {
                    id:"2",
                    username:'Charly'
                }
            ],
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
        connectUser(context, payload){
            const userConnected = { username:payload.username,id:payload.id };

            localStorage.setItem('userConnected', JSON.stringify(userConnected));

            context.commit('UPDATE_CONNECTED_USER', userConnected);
        },

        disconnectUser(context){
            localStorage.removeItem('userConnected');
            context.commit('UPDATE_CONNECTED_USER', '');
        }
    },

}

export default users;
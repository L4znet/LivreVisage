

const users = {
    namespaced: true,

    state(){
        return {
            users: [
                {
                    id: "1",
                    username: 'Laznet'
                },
                {
                    id: "2",
                    username: 'Charly'
                },

                {
                    id: "3",
                    username: 'Toto'
                }
            ],
            userConnected: null,
        }
    },

    getters:{
        getUsers(state){
            return state.users
        },
        getUsername(state){
            console.log(state.userConnected)

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
        UPDATE_USERS_LIST(state, payload){
            state.users = payload
        },
        UPDATE_CONNECTED_USER(state, payload){
            state.userConnected = payload
        },
        UPDATE_USER_CONNECT(state, payload){
            state.userConnected = payload
        },
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
        },

        loadConnected(context){
            const userConnected = localStorage.getItem('userConnected')

            context.commit('UPDATE_USER_CONNECT', JSON.parse(userConnected));

        },
    },

};

export default users;
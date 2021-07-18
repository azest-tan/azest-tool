
export default {
    state: {
        userinfo:{
            username:'Pengfei Tang',
            userage:'34',
        }
    },
    mutations: {
        setuserinfo(state,obj){
            state.userinfo = obj;
        }
    },
};
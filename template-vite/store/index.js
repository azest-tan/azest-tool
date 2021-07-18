import { createStore } from 'vuex'
import UserInfo from '../store/modules/userinfo.js'


export default createStore({
    state: {
        count: 2000,
    },
    mutations: {
        setcount(state,fromout){
            state.count = fromout;
        }
    },
    modules: {
        UserInfo:UserInfo,
    }
})

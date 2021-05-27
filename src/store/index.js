import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import receipt from './receipt'
import users from './users'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{

    },
    mutations:{

    },
    actions:{

    },
    modules:{
        auth,
        receipt,
        users
    }
})
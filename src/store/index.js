import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import content from './content'
import category from './category'



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
        content,
        category

    }
})
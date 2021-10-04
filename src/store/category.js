import axios from 'axios'

export default{
    state:{
        category:[],
        form:{},
        menu:{},
        header:[],
        notheader:[],
        errors:[],

    },
    mutations:{
        setForm(state,data){
            state.form=data
        },
        setCategory(state,data){
            state.category=data        
        },
        setMenu(state,data){
            state.menu=data        
        },
        setHeader(state,data){
            state.header=data        
        },
        setNotHeader(state,data){
            state.notheader=data        
        },
        setErrors(state,data){
          state.errors=data        
      },
    },
    actions:{
        async getCategory({commit}){
            try{
                let response = await axios.get('/api/category')
                if (response.status == 200) {
                    commit('setCategory',response.data.category)
                }
            }catch(errors){
                commit('setErrors',errors)
            }
        },
        async getCategoryTree({commit}){
            try{
                let response = await axios.get('/api/category/tree')
                if (response.status == 200) {
                    commit('setMenu',response.data.category)
                }
            }catch(errors){
                commit('setErrors',errors)
            }
        },
        async getCategoryHeader({commit}){
            try{
                let response = await axios.get('/api/category/isheader')
                if (response.status == 200) {
                    commit('setHeader',response.data.category)
                }
            }catch(errors){
                commit('setErrors',errors)
            }
        },
        async getCategoryNotHeader({commit}){
            try{
                let response = await axios.get('/api/category/notheader')
                if (response.status == 200) {
                    commit('setNotHeader',response.data.category)
                }
            }catch(errors){
                commit('setErrors',errors)
            }
        },
        async getSearchCategory({commit},data){
          try{
              let response = await axios.post('/api/category/search',data)
              if (response.status == 200) {
                  commit('setCategory',response.data)
                  console.log(response.data)
              }
          }catch(errors){
              commit('setErrors',errors)
          }
      },   
      async createCategory({commit},data){
        try{
            let response = await axios.post('/api/category/create',data)
            if (response.status == 200) {
                commit('setForm',{})
                commit('setErrors',{})

            }
        }catch(errors){
            commit('setErrors',errors.response.data.errors)
        }
    },  
    async deleteCategory({commit},data){
        try{
            let response = await axios.delete('/api/category/delete/'+data.id)
            if (response.status == 200) {
                console.log(response.data)
            }
        }catch(errors){
            commit('setErrors',errors)
        }
    },     
    },
}
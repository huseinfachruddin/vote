import axios from 'axios'

export default{
    state:{
        content:[],
        form:{},
        errors:[],

    },
    mutations:{
        setForm(state,data){
            state.form=data
        },
        setContent(state,data){
            state.content=data        
        },
        setErrors(state,data){
          state.errors=data        
      },
    },
    actions:{
        async getContent({commit},page){
            try{
                let response = await axios.get('/api/content?page='+page)
                if (response.status == 200) {
                    commit('setContent',response.data.content)
                }
            }catch(errors){
                commit('setErrors',errors)
            }
        },
        async getSearchContent({commit},data){
          try{
              let response = await axios.post('/api/content/search',data)
              if (response.status == 200) {
                  commit('setContent',response.data.content)
                  console.log(response.data.content)
              }
          }catch(errors){
              commit('setErrors',errors)
          }
      },   
      async createContent({commit},data){
        try{
            let response = await axios.post('/api/content/create',data)
            if (response.status == 200) {
                commit('setForm',{})
                commit('setErrors',{})

            }
        }catch(errors){
            commit('setErrors',errors.response.data.errors)
        }
    },  
    async deleteContent({commit},data){
        try{
            let response = await axios.delete('/api/content/delete/'+data.id)
            if (response.status == 200) {
                console.log(response.data.content)
            }
        }catch(errors){
            commit('setErrors',errors)
        }
    },     
    },
}
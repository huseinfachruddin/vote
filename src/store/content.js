import axios from 'axios'

export default{
    state:{
        content:[],
        form:{},
        errors:[],

    },
    mutations:{
        setForm(state,form){
            state.form=form
        },
        setContent(state,content){
            state.content=content        
        },
        setErrors(state,content){
          state.content=content        
      },
    },
    actions:{
        async getContent({commit}){
            try{
                let response = await axios.get('/api/content')
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
                console.log(response.data.content)
            }
        }catch(errors){
            commit('setErrors',errors)
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
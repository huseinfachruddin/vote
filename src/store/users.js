import axios from 'axios'
// import router from '../router'
export default{
    state:{
        user:[],
        users:{},
        roles:[],
        form:{},
        errors:{},
        success:null,
        loading:false


    },
    getters:{
        roles({state}){
            return state.roles
        }
    },
    mutations:{
        setForm(state,set){
            state.form=set
        },
        setErrors(state,errors){
            state.errors=errors        
        },
        setSuccess(state,success){
            state.success=success        
        },
        setUsers(state,users){
            state.users=users        
        },
        setUser(state,user){
            state.user=user      
        },
        setRoles(state,roles){
            state.roles=roles        
        },
    },
    actions:{
        async getUser({commit},data){
            try {
                let response = await axios.get('/api/user/'+data,{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}})
                if (response.status==200) {
                    let user =response.data.user
                    commit('setForm',user)
                    commit('setErrors',false)
                }  
            } catch (errors) {
                commit('setErrors',errors.response.data)
                commit('setUsers',null)
                commit('setSuccess',false)
            }
        },
        async getUsers({commit}){
            try {
                let response = await axios.get('/api/users/',{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}})
                if (response.status==200) {
                    let users =response.data.user
                    commit('setUsers',users)
                    commit('setSuccess',false)
                    commit('setErrors',false)
                }  
            } catch (errors) {
                commit('setErrors',errors.response.data)
                commit('setUsers',null)
            }
        },
        async searchUser({commit},data){
            try {
                let response = await axios.post('/api/user/search',data.form,{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}})
                if (response.status==200) {
                    let users =response.data.user
                    commit('setUsers',users)
                    commit('setErrors',false)
                }  
            } catch (errors) {
                commit('setErrors',errors.response.data)
                commit('setReceipt',null)
            }
        },
        async getRoles({commit}){
            try {
                let response = await axios.get('/api/roles',{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}})
                if (response.status==200) {
                    let roles =response.data.role
                    commit('setRoles',roles)
                    commit('setErrors',false)
                }  
            } catch (errors) {
                commit('setErrors',errors.response.data)
                commit('setReceipt',null)
            }
        },
        async save({commit},form){
            try {
                let response = await axios.put('/api/user/'+form.id+'/edit',form,{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}})
                if (response.status==200) {
                    let user =response.data.user
                    commit('setForm',user)
                    commit('setSuccess',response.data.success)
                    commit('setErrors',false)
                }  
            } catch (errors) {
                commit('setErrors',errors.response.data.errors)
                commit('setSuccess',false)
            }
        },
        async destroy({commit},data){
            let pilih = window.confirm("Yakin Akan Menghapus?");
            if (pilih) {
                try {
                    let response = await axios.delete('/api/user/'+data+'/delete',{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}})
                    if (response.status==200) {
                        this.getUsers();
                        commit('setSuccess',response.data.success)
                        commit('setErrors',false)
                    }  
                } catch (errors) {
                    commit('setSuccess',false)
                }          
            }
        },
        async changePassword({commit},data){
            commit('setLoading',true)
            let pilih = window.confirm("Yakin Akan mengubah password ?");
            if (pilih) {
            try {
              let response = await axios.put('/api/user/'+data.id+'/change_password',data,{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}});
              if (response.status==200){
                commit('setLoading',false)
                commit('setErrors',false)
                alert('data password berhasil di ubah')
              }
            } catch (errors) {
              commit('setErrors',errors.response.data.errors)
              commit('setLoading',false)
            }
        }
      
          },

    },
}
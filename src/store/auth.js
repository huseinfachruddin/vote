import axios from 'axios'
import router from '../router'
export default{
    state:{
        user:{},
        users:{},
        profile:{},
        form:{},
        role:{},
        errors:{},
        loading:false

    },
    getters:{
        profile(state){
            return state.profile;
        }
    },
    mutations:{
        setForm(state,set){
            state.form=set
        },
        setUser(state,user){
            state.user=user        
        },
        setRole(state,role){
            state.role=role        
        },
        setProfile(state,profile){
            state.profile=profile        
        },
        setErrors(state,errors){
            state.errors=errors        
        },
        setLoading(state,set){
            state.loading=set
        },
    },
    actions:{
        async profile({commit}){
            commit('setLoading',true)
            try{
                let response = await axios.get('/api/profile',{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}})
                if (response.status == 200) {
                    commit('setProfile',response.data)
                    commit('setLoading',false)
                }
            }catch(errors){
                commit('setLoading',false)
            }
        },       
        async login({commit},data) {
            commit('setLoading',true)
            try {
              let response = await axios.post("/api/login", data.form);
              if (response.status == 200) {
                commit('setProfile',response.data.user)
                localStorage.setItem("token", response.data.token)
                commit('setLoading',false)
                return router.push({ name: 'direct' });
              }
            } catch (error) {
                commit('setErrors',error.response.data.errors)
                commit('setLoading',false)
            }
        },
        async register({commit},data){
            commit('setLoading',true)
            try {
              let response = await axios.post('/api/register',data,{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}});
              if (response.status==200){
                alert('Registrasi Berhasil')
                commit('setForm',{})
                commit('setErrors',{})
                commit('setLoading',false)
                return router.push('/login');
              }
            } catch (errors) {
              commit('setErrors',errors.response.data.errors)
              commit('setLoading',false)
            }
      
          },
        async logout({commit}){
          commit('setLoading',true)
          try{
            let response = await axios.get('/api/logout',{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}});
            if (response.status == 200) {
                localStorage.removeItem("token")
                commit('setProfile',{})
                commit('setLoading',false)
                return router.push({ name: 'login' })                
            }
          }catch (errors) {
            commit('setErrors',errors.response.data.errors)
            commit('setLoading',false)
          }
        },
        async direct({commit}){
            commit('setLoading',true)
            try{
                let response = await axios.get('/api/profile',{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}})
                if (response.status == 200) {
                    let role = response.data.user.role_id
                    if (role=='1') {
                        commit('setLoading',false)
                        return router.push({ name: 'admin' });
                    }else if(role=='2'){
                        commit('setLoading',false)
                        return router.push({ name: 'courier' });
                    }else{
                        commit('setLoading',false)
                        return router.push('/');

                    }
                }
            }catch(errors){
                commit('setLoading',false)
                return router.push('/login');
            }
      
          },
          async getRole({commit}){
            commit('setLoading',true)
            try {
              let response = await axios.get('/api/roles',{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}});
              if (response.status==200){
                commit('setRole',response.data.role)
                commit('setLoading',false)

              }
            } catch (errors) {
              commit('setErrors',errors.response.data.errors)
              commit('setLoading',false)
            }
      
          },
          async saveRole({commit},data){
            commit('setLoading',true)
            try {
              let response = await axios.put('/api/role/'+data.id+'/edit',data,{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}});
              if (response.status==200){
                commit('setErrors',{})
                commit('setLoading',false)
                alert('data berhasil di ubah!')
              }
            } catch (errors) {
              commit('setErrors',errors.response.data.errors)
              commit('setLoading',false)
            }
      
          },
          async createRole({commit},data){
            commit('setLoading',true)
            try {
              let response = await axios.post('/api/role/create',data,{headers: {'Authorization': 'Bearer '+localStorage.getItem('token')}});
              if (response.status==200){
                commit('setErrors',{})
                commit('setForm',{})
                commit('setLoading',false)
              }
            } catch (errors) {
              commit('setErrors',errors.response.data.errors)
              commit('setLoading',false)
            }
      
          },
          async frist({commit}){
            commit('setLoading',true)
            try {
              let response = await axios.get('/api/setfrist')
              if (response.status==200){
                commit('setLoading',false)
              }
            } catch (errors) {
              commit('setLoading',false)
            }
      
          },


    },
}
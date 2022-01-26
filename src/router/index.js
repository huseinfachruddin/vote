import Vue from 'vue'
import vuerouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Profile from '../views/Auth/Profile.vue'

import Post from '../views/Post/Post.vue'
import PostDetail from '../views/Post/PostDetail.vue'
import PostCreate from '../views/Post/PostCreate.vue'

import Verification from '../views/Auth/Verification.vue'

Vue.use(vuerouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title:'Beranda'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      title:'Masuk'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta:{
      title:'Daftar'
    }
  },
  {
    path: '/verification',
    name: 'verification',
    component: Verification,
    meta:{
      title:'Verifikasi Nomor'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta:{
      title:'Profile anda'
    }
  },
  {
    path: '/post/:id',
    name: 'post detail',
    component: PostDetail,
    meta:{
      title:'Post'
    }
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
    meta:{
      title:'Post'
    }
  },
  {
    path: '/create/post',
    name: 'post',
    component: PostCreate,
    meta:{
      title:'Post Create'
    }
  },
    { path: '/404', component: Home },  
    { path: '*', redirect: '/404' },

];



const router = new vuerouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(async(to) => {
  await setTimeout(
    store.commit('setLoading',true)
    , 5000)
     document.title = to.meta.title;
     window.scrollTo(0,0);
    await  store.commit('setLoading',false)
    
});



export default router

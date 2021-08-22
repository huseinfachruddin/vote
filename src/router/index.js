import Vue from 'vue'
import vuerouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'


Vue.use(vuerouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title:'Pustaka Ilmu Politik | Cari Pengetahuanmu di sini'
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta:{
      title:'Pustaka Ilmu Politik | Cari Pengetahuanmu di sini'
    }
  },

];



const router = new vuerouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title;
});


export default router

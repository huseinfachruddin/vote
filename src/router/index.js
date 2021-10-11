import Vue from 'vue'
import vuerouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Content-Category.vue'
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
  {
    path: '/content/category/:id',
    name: 'category',
    component: Category,
    meta:{
      title:'Pustaka Ilmu Politik | Cari Pengetahuanmu di sini'
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

router.afterEach((to) => {
  document.title = to.meta.title;
});


export default router

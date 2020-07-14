import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
  ,
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/my/My.vue')
  },
  {
    path: '/car',
    name: 'Car',
    component: () => import('../views/car/Car.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

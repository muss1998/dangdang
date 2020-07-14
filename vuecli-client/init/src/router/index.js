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

    
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // },

  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/Detail.vue')
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
router.beforeEach((to, from, next) => {
  if (to.path == "/my" || to.path == "/car") {
    let flag = window.localStorage.getItem("islogin");
    if(flag){
      next()
    }else{
      alert("请先登录")
      next("/login")
    }
  }else{
    next()
  }

})

export default router

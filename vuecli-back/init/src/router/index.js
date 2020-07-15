import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    beforeEnter(to, from, next) {
      var flag = localStorage.getItem("islogin")
      if (to.path === "/about") {
        if(flag) {
          next()
        }else {
          alert("请登录");
          next('/login'); // 禁止跳转
        }
      } else {
        next()
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//this.$router.push 或者 router-view/router-link

// 首页 --不需要--  商品  --需要--  个人中心
// 导航守卫from to


// 首页/index    列表/list    详情页/detail
// this.$route.path 获取当前组件的路由对象




export default new Vuex.Store({
  state: {
      navInput:""
  },
  getters:{},
  mutations: {

    navChangeInput(state,val){
      state.navInput=val;
    }
  },
  actions: {
  },


  modules: {
  }
})

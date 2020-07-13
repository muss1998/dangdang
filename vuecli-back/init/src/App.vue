<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">登录</router-link>
      <span style="display:inline-block;width:50px"></span>
      <router-link to="/about">管理</router-link>
      <router-view />
    </div>
  </div>
</template>
<script>
import Login from "@/views/Login.vue";

export default {
  data() {
    return {};
  },
  components: {
    Login
  },
  methods: {
    handlechange(v) {
      console.log(v);
      this.flag = v;
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;
}

#nav a {
  font-size: 26px;
  color: #606266;
  text-decoration: none;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">
        <i class="el-icon-user"></i>
        登录
      </router-link>
      <span style="display:inline-block;width:50px"></span>
      <router-link to="/about">
        <i class="el-icon-setting"></i>
        管理
      </router-link>
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>
<script>
import Login from "@/views/Login.vue";

export default {
  data() {
    return {
      isRouterAlive: true //控制视图是否显示的变量
    };
  },
  provide() {
    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。
    return {
      reload: this.reload
    };
  },
  components: {
    Login
  },
  methods: {
    handlechange(v) {
      console.log(v);
      this.flag = v;
    },
    reload() {
      this.isRouterAlive = false; //先关闭，
      this.$nextTick(function() {
        this.isRouterAlive = true; //再打开
      });
    }
  }
};
</script>
<style>
#app {
  margin:0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594726470059&di=906d641e7c9decefa886841729a17b5b&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201608%2F23%2F110408ozqpyypwuwpuo5ld.jpg");
  background-repeat: no-repeat;
  background-size:100% 100%;
  height: 1000px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-size: 26px;
  color: #606266;
  text-decoration: none;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

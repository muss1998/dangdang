<template>
  <div class="myNav">
    <el-row class="tac">
      <el-col :span="12">
        <h2>个人中心</h2>
        <el-menu default-active="2" class="el-menu-vertical-demo" router="true">
          <el-menu-item index="/my">
            <i class="el-icon-menu"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="/car">
            <i class="el-icon-setting"></i>
            <span slot="title">购物车</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
export default {
  name: "My",
  components: {
    
  },
  methods: {
    
  }
};
</script>
<style scoped>
.myNav {
  width: 300px;
}
</style>
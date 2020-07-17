<template>
  <div class="topHeader">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="45" class="era fontalign">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="4" class="fontalign">
            <div class="grid-content bg-purple-light"></div>
          </el-col>
          <el-col :span="2" class="fontalign">
            <div class="grid-content bg-purple-light">我的云书房</div>
          </el-col>
          <el-col :span="2" class="fontalign">
            <div class="grid-content bg-purple">我的当当</div>
          </el-col>
          <el-col :span="2" class="fontalign">
            <div class="grid-content bg-purple-light">0元领物</div>
          </el-col>
          <el-col :span="2" class="fontalign">
            <div class="grid-content bg-purple-light">小说投稿</div>
          </el-col>
          <el-col :span="2" class="fontalign">
            <div class="grid-content bg-purple-light">我要出书</div>
          </el-col>
          <el-col :span="2" class="fontalign">
            <div class="grid-content bg-purple-light">企业采购</div>
          </el-col>
          <el-col :span="2" class="fontalign">
            <div class="grid-content bg-purple-light">客户服务</div>
          </el-col>
          <el-col :span="2" class="fontalign">
            <div class="grid-content bg-purple-light">
              <el-button size="mini" round @click="tologin">登录</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    tologin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped>
.topHeader {
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 34px;
  cursor: pointer;
}
.era {
  padding-left: 130px;
  align-content: center;
  padding-top: 5px;
}

.fontalign {
  padding-top: 5px;
}
.fontalign :hover {
  color: red;
}
</style>

<template>
  <div class="box">
    <!-- 左侧菜单 -->
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
    <!-- 个人信息 -->
    <div class="msgbox">
      <img :src="arr.imgsrc" />
      <el-button @click="img" type="primary" icon="el-icon-edit" size="mini">头像</el-button>
      <p>
        {{arr.username}}
        <el-button
          @click="changeun"
          class="chuser"
          type="primary"
          icon="el-icon-edit"
          size="mini"
        >用户名</el-button>
      </p>
      <el-button @click="changekw" class="keycha" type="primary" icon="el-icon-edit" size="mini">密码</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "My",
  data() {
    return {
      arr: {},
      id: {
        username:"qqqqqq"
      }
    };
  },
  components: {},
  methods: {
    img() {
      console.log("改头像");
    },
    changeun() {
      // console.log("改用户名");
      this.$prompt("请输入修改的用户名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[a-zA-Z0-9_]{6,16}$/,
        inputErrorMessage: "密码在6~16位之间，字母、数字或下滑线"
      }).then(({ value }) => {
        console.log(value);
        axios
          .post(
            "http://localhost:7001/mychgusern",
            { newusername: value, username: this.arr.username },
            { withCredentials: true }
          )
          .then(res => {
            // console.log(res.data);
            this.$message({
              type: "info",
              message: res.data.info
            });
          });
      });
    },
    changekw() {
      console.log("改密码");
      this.$prompt("请输入修改的密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[a-zA-Z0-9_]{6,16}$/,
        inputErrorMessage: "密码在6~16位之间，字母、数字或下滑线"
      }).then(({ value }) => {
        console.log(value);
        axios
          .post(
            "http://localhost:7001/mychgkey",
            { newpassword: value, username: this.arr.username },
            { withCredentials: true }
          )
          .then(res => {
            // console.log(res.data);
            this.$message({
              type: "info",
              message: res.data.info
            });
          });
      });
    }
  },
  mounted() {
    var url = "http://localhost:7001/my";
    axios
      .post(url,{}, { withCredentials: true }) //传username，需缓存数据，待定
      .then(res => {
        this.arr = res.data;
        // console.log(this.arr);
      });
  }
};
</script>
<style scoped>
.box {
  display: flex;
}
.myNav {
  width: 300px;
}
.msgbox {
  margin: 0 auto;
  width: 600px;
}
.msgbox img {
  border: 1px solid gray;
  width: 300px;
  height: 300px;
  border-radius: 150px;
}
.msgbox p {
  margin-left: 130px;
  font-size: 20px;
}
.chuser {
  margin-left: 70px;
}
.keycha {
  margin-left: 130px;
}
</style>
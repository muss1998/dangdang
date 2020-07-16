<template>
  <div class="box">
    <!-- 左侧菜单 -->
    <div class="myNav">
      <el-row class="tac">
        <el-col :span="12">
          <h2>个人中心</h2>
          <el-menu default-active="2" class="el-menu-vertical-demo" router>
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
      <div class="left">
        <img :src="arr.imgsrc" />
        <span>{{arr.username}}</span>
      </div>
      <div class="right">
        <el-button
          @click="img"
          type="primary"
          plain
          icon="el-icon-edit"
          size="mini"
          class="mybtn"
        >更换头像</el-button>
        <br />
        <br />
        <el-button
          @click="changeun"
          class="mybtn"
          type="info"
          plain
          icon="el-icon-edit"
          size="mini"
        >改用户名</el-button>
        <br />
        <br />
        <el-button
          @click="changekw"
          class="mybtn"
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
        >更改密码</el-button>
        <br />
        <br />
        <br />
        <el-button type="warning" plain @click="quiet">退出登录</el-button>
      </div>
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
        username: "qqqqqq"
      }
    };
  },
  components: {},
  methods: {
    img() {
      // console.log("改头像");
      this.$prompt("请输入修改的头像图片网址", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(({ value }) => {
        console.log(value);
        axios
          .post(
            "http://localhost:7001/mychgimg",
            { newimgsrc: value, username: this.arr.username },
            { withCredentials: true }
          )
          .then(res => {
            // console.log(res.data);
            this.$message({
              type: "info",
              message: res.data.info
            });
              this.$router.go(0);

            
          });
      });
    },
    changeun() {
      // console.log("改用户名后刷新页面");
      this.$prompt("请输入修改的用户名", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[a-zA-Z0-9_]{6,16}$/,
        inputErrorMessage: "密码在6~16位之间，字母、数字或下滑线"
      }).then(({ value }) => {
        // console.log(value);
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
            if (res.data.code != 303) {
              this.$router.go(0);
            }
          });
      });
    },
    changekw() {
      // console.log("改密码后重新登录");
      this.$prompt("请输入修改的密码", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[a-zA-Z0-9_]{6,16}$/,
        inputErrorMessage: "密码在6~16位之间，字母、数字或下滑线"
      }).then(({ value }) => {
        // console.log(value);
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
            this.$router.push(`/login`);
          });
      });
    },
    quiet() {
      // 退出
      window.localStorage.removeItem("islogin");
      this.$router.push(`/login`);
    }
  },
  mounted() {
    var url = "http://localhost:7001/my";
    axios.post(url, {}, { withCredentials: true }).then(res => {
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
  margin: 60px auto;
  width: 700px;
  height: 400px;
  box-shadow: 3px 3px 30px #888888;
  border-radius: 6px;
  display: flex;
}
.msgbox img {
  width: 300px;
  height: 300px;
  border-radius: 150px;
}
.msgbox .left span {
  display: inline-block;
  width: 90px;
  height: 40px;
  font-size: 26px;
}
.msgbox .right {
  margin-top: 60px;
  margin-left: 100px;
}
</style>
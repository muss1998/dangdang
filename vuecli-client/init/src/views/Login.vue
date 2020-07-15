<template>
  <div>
    <el-row>
      <el-col :span="12">
        <img src="../img/login-img.jpg" class="login-img" />
      </el-col>
      <el-col :span="12">
        <div class="login-form">
          <div></div>
          <p class="login-form-title">账号登录</p>
          <el-input v-model="Username" placeholder="请输入用户名" class="login-user" @input="username"></el-input>
          <p :class="warn1">*请输入6-16位数字、大小写字母或者下划线</p>
          <el-input
            v-model="Password"
            placeholder="请输入密码"
            class="login-password"
            @input="password"
            show-password
          ></el-input>
          <p :class="warn2">*请输入6-16位数字、大小写字母或者下划线</p>

          <br />
          <el-button type="primary" round class="loginbtn" @click="login">登录</el-button>
          <br />
          <div class="register-box">
            <a href="#" class="forget">忘记密码</a>
            <span class="register-text">还没有账号？</span>
            <router-link to="/register" class="Toregister"><span class="register-btn">前往注册</span></router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted () {
  },
  data() {
    return {
      Username: "",
      Password: "",
      warn1: "warn1",
      warn2: "warn2"
    };
  },
  methods: {
    username() {
      var username = /^[a-zA-Z0-9_]{6,16}$/;
      if (username.test(this.Username)) {
        this.warn1 = "warn11";
      } else {
        if (this.Username == "") {
          this.warn1 = "warn1";
        } else {
          this.warn1 = "warn12";
        }
      }
    },
    password() {
      var password = /^[a-zA-Z0-9_]{6,16}$/;
      if (password.test(this.Password)) {
        this.warn2 = "warn21";
      } else {
        if (this.Password == "") {
          this.warn2 = "warn2";
        } else {
          this.warn2 = "warn22";
        }
      }
    },
    login() {
      axios
        .post(
          "http://localhost:7001/login",
          {
            username: this.Username,
            password: this.Password
          },
          { withCredentials: true }
        )
        .then(res => {
          if (res.data.code == 200) {
            window.localStorage.setItem("islogin",true)
            this.$alert(res.data.info, "温馨提示", {
              confirmButtonText: "确定",
              callback: () => {
                if(this.$route.query.from=="/register"){
                  this.$router.push(`/`)
                }else{
                  this.$router.push(`${this.$route.query.from}`)
                }
                ;
              }
            });
          } else {
            this.$alert(res.data.info, "温馨提示", {
              confirmButtonText: "确定"
            });
          }
        });
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.login-img {
  width: 65%;
  height: 50%;
  margin-top: 130px;
  margin-left: 30%;
}

.login-form {
  margin-top: 80px;
  border: 1px solid #ccc;
  text-align: center;
  width: 70%;
  margin-left: 50px;
}

.login-form-title {
  margin-top: 80px;
  font-size: 28px;
}

.warn1 {
  font-size: 10px;
  margin-bottom: 30px;
  color: #aaa;
}

.warn11 {
  font-size: 10px;
  margin-bottom: 30px;
  color: green;
}

.warn12 {
  font-size: 10px;
  margin-bottom: 30px;
  color: red;
}
.warn2 {
  font-size: 10px;
  margin-bottom: 30px;
  color: #aaa;
}

.warn21 {
  font-size: 10px;
  margin-bottom: 30px;
  color: green;
}

.warn22 {
  font-size: 10px;
  margin-bottom: 30px;
  color: red;
}

.login-user {
  margin: 0 auto;
  width: 60%;
}

.login-password {
  margin: 0 auto;
  width: 60%;
}

.loginbtn {
  width: 60%;
  margin-bottom: 60px;
}

.forget {
  color: #409eff;
  margin-right: 100px;
  text-decoration: none;
}
.register-box {
  margin-bottom: 100px;
}

.register-text {
  font-size: 12px;
}

.register-btn {
  font-size: 18px;
  text-decoration: none;
  color: #333;
}

.Toregister{
  text-decoration: none;
}
</style>
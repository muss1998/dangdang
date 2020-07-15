<template>
  <div>
    <el-row>
      <el-col :span="12">
        <img src="../img/login-img.jpg" class="login-img" />
      </el-col>
      <el-col :span="12">
        <div class="login-form">
          <div></div>
          <p class="login-form-title">新用户注册</p>
          <el-input v-model="Username" placeholder="请输入用户名" class="login-user" @input="username"></el-input>
          <p :class="warn1">*请输入6-16位数字、大小写字母或者下划线</p>
          <p :class="warn4">{{warn}}</p>
          <el-input
            v-model="Password"
            placeholder="请输入密码"
            class="login-password"
            @input="password"
            show-password
          ></el-input>
          <p :class="warn2">*请输入6-16位数字、大小写字母或者下划线</p>
          <el-input
            v-model="Passwordre"
            placeholder="确认密码"
            class="login-password"
            @input="passwordre"
            show-password
          ></el-input>
          <p :class="warn3">{{check}}</p>
          <br />
          <el-button type="primary" round class="loginbtn" @click="register">注册</el-button>
          <br />
          <div class="register-box">
            <span class="register-text">已有账号/</span>
            <router-link to="/login" class="Tologin">
              <span class="register-btn">前往登录→</span>
            </router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Username: "",
      Password: "",
      Passwordre: "",
      warn: "",
      warn1: "warn1",
      warn2: "warn2",
      warn3: "warn2",
      warn4: "warn41",
      check: "*请再次确认您的密码"
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

      if (this.Username == "") {
        this.warn = "";
      } else {
        axios
          .post(
            "http://localhost:7001/search",
            {
              username: this.Username
            },
            {
              withCredentials: true
            }
          )
          .then(res => {
            if (res.data.code == 303) {
              this.warn = res.data.info;
              this.warn4 = "warn42";
            } else {
              this.warn = res.data.info;
              this.warn4 = "warn41";
            }
          });
      }
    },
    register() {
      if (this.check == "*两次密码输入不一致") {
        this.$alert("两次密码输入不一致,请重新输入", "温馨提示", {
          confirmButtonText: "确定"
        });
      } else if (this.Username == "") {
        this.$alert("您的用户名未输入", "温馨提示", {
          confirmButtonText: "确定"
        });
      } else if (this.Password == "") {
        this.$alert("您的密码未输入", "温馨提示", {
          confirmButtonText: "确定"
        });
      } else if (this.Passwordre == "") {
        this.$alert("您还未确认密码", "温馨提示", {
          confirmButtonText: "确定"
        });
      } else if (this.warn1 == "warn12") {
        console.log(this.warn1);
        this.$alert("用户名格式错误，请检查后重试", "温馨提示", {
          confirmButtonText: "确定"
        });
      } else if (this.warn2 == "warn22") {
        this.$alert("密码格式错误，请检查后重试", "温馨提示", {
          confirmButtonText: "确定"
        });
      } else {
        axios
          .post(
            "http://localhost:7001/register",
            {
              username: this.Username,
              password: this.Password
            },
            {
              withCredentials: true
            }
          )
          .then(res => {
            if (res.data.code == 200) {
              this.$alert(res.data.info, "温馨提示", {
                confirmButtonText: "确定",
                callback: () => {
                  this.$router.push(`/login?from=${this.$route.path}`);
                }
              });
            } else {
              this.$alert(res.data.info, "温馨提示", {
                confirmButtonText: "确定"
              });
            }
          });
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
      if (this.Passwordre == this.Password) {
        this.check = "";
        this.warn3 = "warn2";
      } else {
        if ((this.Passwordre == "")) {
          this.check = "";
          this.warn3 = "warn2";
        } else {
          this.check = "*两次密码输入不一致";
          this.warn3 = "warn32";
        }
      }
    },
    passwordre() {
      if (this.Passwordre == "") {
        this.check = "*请再次确认您的密码";
        this.warn3 = "warn2";
      } else {
        if (this.Passwordre != this.Password) {
          this.check = "*两次密码输入不一致";
          this.warn3 = "warn32";
        } else {
          this.check = "";
          this.warn3 = "warn2";
        }
      }
    }
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.login-img {
  width: 500px;
  height: 450px;
  margin-top: 130px;
  margin-left: 230px;
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

.warn32 {
  font-size: 10px;
  margin-bottom: 30px;
  color: red;
}

.warn41 {
  font-size: 10px;
  color: green;
}

.warn42 {
  font-size: 10px;
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
  margin-bottom: 20px;
}

.register-box {
  margin-bottom: 30px;
}

.register-text {
  font-size: 12px;
}

.register-btn {
  font-size: 18px;
  text-decoration: none;
  color: #333;
}

.Tologin {
  text-decoration: none;
}
</style>

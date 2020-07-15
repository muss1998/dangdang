<template>
  <div class="login">
    <div class="myform" v-show="flag">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm loginform"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="loginOver" v-show="flag2">
      <img v-bind:src="imgsrc" width="150px" height="150px" />
      <p>欢迎{{user}}登录，祝你天天开心~</p>
      <el-button type="success" round style="margin-right:-320px" @click="quit()">退出登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      flag: true,
      flag2: false,
      imgsrc: "",
      user: "",
      ruleForm: {
        pass: "",
        checkPass: "",
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ],
        pass: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var url = "http://localhost:7001/administratorLogin";
          axios.post(url, this.ruleForm).then(res => {
            if (res.data.code == 1) {
              window.localStorage.setItem("islogin", this.ruleForm.name);
              this.$alert("登录成功", {
                confirmButtonText: "确定",
                callback: action => {
                  this.$message({
                    type: "info",
                    message: `欢迎${this.ruleForm.name}登录~`
                  });
                  localStorage.setItem("imgsrc", res.data.imgsrc); //把头像地址缓存下来
                }
              });
              this.$router.push({ name: "About" });
            } else if (res.data.code == 0) {
              alert("登录失败");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    quit() {
      this.$confirm("此操作将退出登录, 是否继续?", "提示", {
        confirmButtonText: "确定退出",
        cancelButtonText: "取消退出",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          localStorage.removeItem("islogin");
          this.flag = true;
          this.flag2 = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  mounted() {
    if (localStorage.getItem("islogin")) {
      this.flag = false;
      this.flag2 = true;
      this.imgsrc =
        localStorage.getItem("imgsrc") ||
        "http://img3.imgtn.bdimg.com/it/u=2601900707,917050054&fm=26&gp=0.jpg"; //展示用户头像
      this.user = localStorage.getItem("islogin");
    }
  }
};
</script>
<style scoped>
.loginform {
  width: 500px;
  height: 500px;
  margin: 50px auto;
}
.loginOver {
  margin: 50px auto;
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 4px;
  transition: box-shadow 0.5s;
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
}
.loginOver:hover {
  box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
  text-decoration: none;
}
.loginOver p {
  font-size: 20px;
}
</style>


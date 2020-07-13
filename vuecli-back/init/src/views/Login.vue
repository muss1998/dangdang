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
       <h4>管理员也要天天快乐~</h4>
       <img  v-bind:src="imgsrc" >
       <!-- <img :src="imgsrc"  width="50px" height="50px"> -->
       <h1>hhh</h1>
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
      flag2:false,
      imgsrc:'',
      ruleForm: {
        pass: "",
        checkPass: "",
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 7 个字符", trigger: "blur" }
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
            console.log(res);
            this.imgsrc = res.data.imgsrc;
            console.log(this.imgsrc)
            if (res.data.code == 1) {
              window.localStorage.setItem("islogin", this.ruleForm.name);
              this.$alert("登录成功", {
                confirmButtonText: "确定",
                callback: action => {
                  this.$message({
                    type: "info",
                    message: `欢迎${this.ruleForm.name}登录~`
                  });
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
    }
  },
  mounted() {
    if(localStorage.getItem("islogin")) {
      this.flag = false;
      this.flag2 = true;
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
</style>


<template>
  <div class="addform">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="书名">
        <el-input v-model="form.goodsname"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-input v-model="form.imgsrc"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.keywords"></el-input>
      </el-form-item>
      <el-form-item label="评价量">
        <el-input v-model="form.pjnumber"></el-input>
      </el-form-item>
      <el-form-item label="收藏量">
        <el-input v-model="form.scnumber"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        goodsname: "",
        scnumber: "",
        pjnumber: "",
        keywords: "",
        price: "",
        imgsrc: "",
        author: ""
      }
    };
  },
  methods: {
    onSubmit() {
      var url = `http://localhost:7001/addbooks`;
      axios.post(url, this.form).then(res => {
        if (res.data.code === 1) {
          this.$message({
            message: "恭喜你，添加成功~",
            type: "success"
          });
          this.form={}
        }
      });
    }
  }
};
</script>

<style scoped>
.addform {
  width: 600px;
  padding: 40px;
  margin: 4px auto;
  box-shadow: 3px 3px 30px #888888;
  border-radius: 6px;
}
.addform .el-input__inner {
  width: 80% !important;
}
</style>
<template>
  <div id="search">
    <div class="search">
      <el-input placeholder="请输入书名" v-model="goodsname"></el-input>
      <el-button icon="el-icon-search" type="primary" @click="search"></el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      goodsname:''
    };
  },
  methods: {
    search() {
       var url = `http://localhost:7001/searchbooks?goodsname=${this.goodsname}`;
       axios.get(url).then((res)=>{
           console.log(res);
           this.$emit("search",res.data)
       })
    }
  }
};
</script>
<style scoped>
#search {
  width: 100%;
}
.search {
  display: flex;
  width: 300px;
  margin-bottom: 4px;
  margin-left: 866px;
}
</style>
<template>
  <div>
    <div class="home">
      <el-page-header @back="goBack" content="购物车"></el-page-header>
    </div>
    <div v-for="(item,index) in arr.result" :key="item.gid">
      <div class="box1">
        <img :src="item[0].imgsrc" />
        <div class="msg">
          <p class="goodsname">{{item[0].goodsname}}</p>
          <p>{{item[0].author}}</p>
          <p class="price">{{item[0].price}}元/本</p>
        </div>
        <div class="carnumber">
          <p>数量：{{arr.data[index].number}}本</p>
          <el-checkbox v-model="checked" size="medium">结账</el-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "Car",
  data() {
    return {
      arr: "",
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    goBack() {
      console.log("go back");
      this.$router.push({ path: "/my" });
    }
  },
  mounted() {
    var url = "http://localhost:7001/car";
    axios
      .post(url, {}, { withCredentials: true }) //传username，需缓存数据，待定
      .then(res => {
        this.arr = res.data;
        console.log(res.data.result);
      });
  }
};
</script>
<style>
.box1 {
  margin: 5px auto;
  width: 800px;
  height: 200px;
  border: 1px solid gray;
  display: flex;
  position: relative;
  
}
.box1 img{
  width: 250px;
  height: 200px;
}
.goodsname{
  font-size: 24px;
}
.price{
  color: gray;
}
.msg{
  margin-left:150px;
}
.carnumber{
  text-align: right;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>

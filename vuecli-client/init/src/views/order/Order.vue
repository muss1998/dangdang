<template>
  <div class="orderBox">
    <h2>我的订单</h2>
    <div class="orderitem" v-for="(item,index) in orderArr" :key="index">
      <img :src="item.imgsrc" alt />
      <div class="right">
        <p>{{item.goodsname}}</p>
        <br/>
        <p>￥{{item.price}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Order",
  data() {
    return {
      orderArr: []
    };
  },
  mounted() {
    axios
      .post("http://localhost:7001/order", {}, { withCredentials: true })
      .then(res => {
        console.log(res.data);
        this.orderArr = res.data;
      });
  }
};
</script>
<style>
.orderBox {
  width: 900px;
  height: 700px;
  padding: 40px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
}
.orderitem {
  width: 440px;
  margin: 20px auto;
  height: 200px;
  border: 1px solid #a9c9e2;
  border-radius: 10px;
  transition: box-shadow 0.5s;
  box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
  display: flex;
}
.orderitem img {
  width: 150px;
  height: 200px;
}
.right{
  font-size: 20px;
  margin-left: 100px;
  margin-top: 20px;
  text-align: center;
}
</style>
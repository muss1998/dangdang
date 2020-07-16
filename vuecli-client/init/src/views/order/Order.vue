<template>
  <div class="orderBox">
    <div class="orderitem" v-for="(item,index) in orderArr" :key="index"></div>
  </div>
</template>
<script>
export default {
  name: "Order",
  data() {
    return {
        orderArr:[]
    };
  },
  mounted(){
      
  }
};
</script>
<style>
.orderBox {
  width: 900px;
  height: 700px;
  margin: 30px auto;
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
}
.orderitem {
  width: 800px;
  margin: 20px auto;
  height: 200px;
  border: 1px solid #a9c9e2;
  border-radius: 10px;
  transition: box-shadow 0.5s;
  box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
  display: flex;
}
</style>
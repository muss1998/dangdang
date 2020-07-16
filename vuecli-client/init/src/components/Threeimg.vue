<template>
  <div class="threeimg">
  
  <div class="littlebox">
  <img src="../../img/threeimg/01.jpg" alt="" width="370px">
  
  </div>
  <div class="littlebox">
  <img src="../../img/threeimg/02.jpg" alt="" width="370px">
  </div>
  <div class="littlebox">
  <img src="../../img/threeimg/03.jpg" alt="" width="370px">
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>


.threeimg{
    width: 1251px;
    height: 160px;
    border-top: 2px solid #f6f6f6;
   margin-top: 10px;
    margin-left: 86px;
    display: flex;
    justify-content:space-around;
    align-items: center;
}
.threeimg .littlebox{
        width: 370px;
        height: 140px;
        
       
}   
.threeimg .littlebox img{
    cursor: pointer;
}
</style>>


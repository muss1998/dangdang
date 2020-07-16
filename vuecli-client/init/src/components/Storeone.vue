<template>
  <div class="Storeone">
    <el-container>
      <el-aside class="left" width="190px">
        <div class="headertop">11111</div>

        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
        <div class="levelone">
          <span></span>
        </div>
Aside
      </el-aside>

      <el-main class="mid" >
        <div class="lunbo"></div>

        <div class="titlebooks">
        <img src="../../img/xinshushangjia.png" alt="" width="750px"></div>

        <div class="books">
        这里用弹性盒子拿到后端的书籍信息进行循环添加商品信息
        
        </div>Main
      </el-main>

      <el-aside class="right" width="244px">
      <div class="activelife"></div>
      <div class="ordersell"></div>
      <div class="hoticon"></div>
      <div class="hotbooks"></div>
      
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
 data() {
    return {
      
    }
  }
};
</script>

<style scoped="scoped">
.el-main {
  padding: 0;
  flex: 0;
  flex-basis: 750px;

}
.Storeone {
  width: 1200px;
  height: 916px;
  margin-left: 111px;
  margin-bottom: 20px;
}
.Storeone .left {
  border: 1px solid #487a6f;
  height: 876px;
  width: 188px;
}

.Storeone .mid {
  width: 750px;
  border: 1px solid red;
  margin-left: 6px;
  margin-right: 6px;
}

.Storeone .mid .lunbo {
  width: 752px;
  height: 315px;
  border: 1px solid black;
}
.Storeone .mid .titlebooks{
    width: 808px;
    height: 43px;
    border-bottom: 2px solid black;
    margin-top: 5px;
    margin-bottom: 5px;
   
}


.Storeone .left .levelone {
  border: 1px solid #487a6f;
  height: 10px;
}
.Storeone .left .levelone span {
  width: 170px;
  height: 24px;
  display: block;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
}

.Storeone .left .headertop {
  height: 35px;
  width: 190px;
  text-align: center;
  font-size: 18px;
  background: #487a6f;
  border-radius: 4px 4px 0 0;
  line-height: 34px;
  color: #fff;
  font-family: "Microsoft Yahei";
}

.Storeone .right {
  border: 1px solid #f6f6f6;
  height: 876px;
  width: 188px;
}
.Storeone .right .activelife{
    width: 240px;
    height: 110px;
    border: 1px solid black;
}
.Storeone .right .ordersell{
    width: 240px;
    height: 193px;
    border: 1px solid black;
    margin-top: 9px;
    margin-bottom: 4px;
}
.Storeone .right .hoticon{
    width: 240px;
    height: 40px;
    border: 1px solid black;
}
.Storeone .right .hotbooks{
    width: 238px;
    height: 510px;
    border: 1px solid red;
}
</style>
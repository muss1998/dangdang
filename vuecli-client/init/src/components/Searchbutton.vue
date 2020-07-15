<template>
  <div>
    <el-container>
      <el-aside width="320px" class="search"
        ><img
          src="http://img61.ddimg.cn/upload_img/00405/luyi/DDlogoNEW.gif"
          alt=""
      /></el-aside>
      <el-main>
        <input type="text" name="key" value="DK" />

        <button class="searchimg">111</button>
        <span class="big"
          ><span class="little">全部分类</span>
          
              
          </span>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
};
</script>
<style scoped>
.big {
  position: absolute;
  width: 96px;
  height: 39px;

  left: 550px;
  background-color: #f9f9f9;
  top: 24px;
}
.little {
  position: absolute;
  width: 64px;
  height: 21px;
  bottom: 10px;
  text-align: center;
  vertical-align: center;
  left: 10px;
}

.el-aside {
  color: #333;
  text-align: center;

  height: 80px;
  width: 343px;
}
.el-main {
  width: 700px;
  height: 80px;
  position: relative;
}

.el-main input {
  height: 100%;
  width: 470px;
  margin-left: 150px;
  border: 2px solid red;
}

input {
  outline: none;
}

.search {
  padding-left: 110px;
}

.searchimg {
  width: 48px;
  height: 46px;
  background-color: red;
  border: 1px solid red;
  outline: none;
}



</style>

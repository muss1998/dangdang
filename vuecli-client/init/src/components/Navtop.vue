<template>
  <div class="nav">
    <ul>
      <li>
        <div class="red">
          <a href class="allfenlei">
            全部商品分类
            <i class="el-icon-arrow-down"></i>
          </a>
        </div>
      </li>

      <li class="little">
        <a href>图书</a>
      </li>
      <li class="little">
        <a href>电子书</a>
      </li>
      <li class="little">
        <a href>网络文学</a>
      </li>
      <li class="little">
        <a href>服装</a>
      </li>
      <li class="little">
        <a href>户外运动</a>
      </li>
      <li class="little">
        <a href>孕婴童</a>
      </li>
      <li class="little">
        <a href>家居</a>
      </li>
      <li class="little">
        <a href>当当优品</a>
      </li>
      <li class="little">
        <a href>食品</a>
      </li>
      <li class="little">
        <a href>Apple</a>
      </li>
      <li class="little">
        <a href>电器城</a>
      </li>
    </ul>
    <div class="bottomline"></div>
  </div>
</template>

<script>
export default {};
</script>


<style  scoped>
.nav ul {
  padding-inline-start: 0px;
  margin-bottom: 0;
  margin-top: 0;
}
.nav ul li {
  list-style: none;
  color: #323232;
  display: inline-block;
}
.nav ul li a:hover {
  color: red;
}
.allfenlei {
  color: white !important;
}
.allfenlei:hover {
  color: white !important;
}
.nav .red {
  width: 191px;
  height: 40px;
  background-color: red;
  color: white;
  font-size: weight;
  margin-left: 115px;
  text-align: center;
  line-height: 40px;
}
.bottomline {
  border-bottom: 2px solid red;
}
.little {
  padding-left: 40px;

  padding-bottom: 0px;
  margin-top: 10px;
  font: "Microsoft Yahei";
  font-weight: bold;
  font-size: 14px;
  font-weight: 40px;
}

a {
  text-decoration: none;
}
</style>
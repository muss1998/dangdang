<template>
  <div class="footer">
    <div class="topimg">
      <div class="imgfont">1</div>
      <div class="imgfont">2</div>
      <div class="imgfont">3</div>
      <div class="imgfont">4</div>
    </div>
    <div class="guide"></div>
    <div class="last">
      <ul>
        <li>公司简历</li>
        <span>|</span>
        <li>诚聘英才</li>
        <span>|</span>

        <li>网站联盟</li>
        <span>|</span>

        <li>当当招聘</li>
        <span>|</span>

        <li>机构销售</li>
        <span>|</span>

        <li>手机当当</li>
        <span>|</span>

        <li>官方Blog</li>
        <span>|</span>

        <li>热词搜索</li>
      </ul>
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
<style  scoped>
.footer {
  margin-top: 10px;
  width: 100%;
  height: 420px;
  border: 1px solid red;
  border-top: 2px solid red;
  overflow: hidden;
}
.footer .topimg {
  width: 100%;
  height: 78px;
  border: 1px solid blue;
  display: flex;
  padding-left: 300px;
  background-color: #f4f4f4;
  overflow: hidden;
}
.footer .topimg .imgfont {
  width: 15%;
  height: 70px;
  border: 1px solid yellowgreen;
}
.footer .guide {
  width: 60.5%;
  height: 140px;
  border: 1px solid green;
  margin-left: 300px;
  margin-top: 40px;
}
.footer .last {
  width: 100%;
  height: 100px;
  border: 1px solid brown;
}
.footer .last ul {
  margin-left: 24%;
}
.footer .last ul li {
  display: inline-block;
  list-style: none;
  cursor: pointer;
  color: #8c8c8c;
  font-size: 12px;
}
.footer .last span {
  margin: 0 17px 0 19px;
  color: #8c8c8c;
   font-size: 12px;

}
.footer .last li :hover{
    color: red;
    text-decoration: underline;
}
</style>
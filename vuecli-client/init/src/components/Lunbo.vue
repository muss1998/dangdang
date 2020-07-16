<template>
  <div class="lunbo">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { Carousel, CarouselItem } from "element-ui";
export default {
  name: "Lunbo",
  data() {
    return {
      imgs: [
        "http://img63.ddimg.cn/upload_img/00838/cxtc/750x315_wzh_20200702-1593745049.jpg",
        "http://img60.ddimg.cn/upload_img/00838/cxtc/750x315-1593745064.jpg",
        "http://img62.ddimg.cn/upload_img/00785/ts0706_0719/750x315-1593757740.jpg",
        "http://img61.ddimg.cn/upload_img/00316/by/750-315-2-1594276881.jpg",
        "http://img63.ddimg.cn/upload_img/00785/ts/750x315_wzh_20200702-1593760764.jpg",
        "http://img63.ddimg.cn/upload_img/00817/xin/750x315_wzh_20200701ts-1594033931.jpg",
        "http://img60.ddimg.cn/cuxiao/hdaq750x315.jpg",
        "http://img61.ddimg.cn/upload_img/00478/0609/750x315_wy-1593773642.jpg",
        "http://img61.ddimg.cn/upload_img/00791/xmj/750x315-1593513461.jpg",
        "http://img61.ddimg.cn/upload_img/00316/by/750x315-1594029826.jpg",
        "http://img51.ddimg.cn/9006290091990051.jpg",
        "http://img63.ddimg.cn/upload_img/00820/a/750x315shuqi-1594281496.jpg"
      ]
    };
  }
};
</script>
<style  scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.lunbo {
  width: 100%;
  height: 300px;
}
.lunbo img {
  width: 100%;
  height: 300px;
}
</style>
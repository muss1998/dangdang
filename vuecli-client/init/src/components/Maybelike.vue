<template>
  <div class="maybelike">
    <div class="maylikeimg">
      <h1>猜你喜欢</h1>
    </div>
    <div class="bookleft">
      <table>
        <tr>
          <td v-for="(item,index) in bookname" :key="index">
            <img :src="item.imgsrc" alt />
            <p>{{item.title}}</p>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <p>{{item.price}}</p>
          </td>
        </tr>
        <tr>
          <td v-for="(item,index) in bookname" :key="index">
            <img :src="item.imgsrc" alt />
            <p>{{item.title}}</p>
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            <p>{{item.price}}</p>
          </td>
        </tr>
      </table>
    </div>
    <div class="authorright">
      <!-- <table border="1"> -->
      <table>
        <tr>
          <td colspan="2">
            <h4>您可能喜欢的作者：</h4>
          </td>
        </tr>
        <tr>
          <td>流潋紫</td>
          <td>桐华</td>
        </tr>
        <tr>
          <td>海飘雪</td>
          <td>卡勒德·胡赛尼</td>
        </tr>
        <tr>
          <td>马克·李维</td>
          <td>张嘉佳</td>
        </tr>
        <tr>
          <td>江南</td>
          <td>唐家三少</td>
        </tr>
        <tr>
          <td>天蚕土豆</td>
          <td>沧月</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      value: 3.7,
      bookname: []
    };
  },
  mounted() {
    axios.get("http://localhost:7001/allbooks?pageNum=5&num=1").then(res => {
      this.bookname = res.data.books;
      console.log(res.data);
    });
  }
};
</script>
<style  scoped>
.maybelike {
  width: 1204px;
  height: 510px;
  margin-left: 108px;
  position: relative;
}
.maybelike .maylikeimg {
  height: 50px;
  width: 1204px;
  /* border: 1px solid blueviolet; */
}

.maybelike .bookleft {
  width: 952px;
  height: 447px;
  /* border: 1px solid forestgreen; */
}
.maybelike .bookleft p,
h1 {
  margin: 0;
  padding: 0;
}
.maybelike .bookleft p:last-child {
  font-size: 20px;
  color: red;
}
.maybelike .bookleft tr td {
  width: 400px;
  height: 218px;
}
.bookleft tr td img {
  width: 150px;
  height: 150px;
  vertical-align: top;
}
.maybelike .authorright {
  width: 242px;
  height: 447px;
  border: 1px solid #ccc;
  background-color: #ccc;
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 960px;
}
.authorright tr td {
  width: 115px;
  height: 52px;
  text-align: center;
}
.authorright h4 {
  color: green;
}
</style>
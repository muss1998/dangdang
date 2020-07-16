<template>
  <div class="maybelike">
    <div class="maylikeimg">
      <div class="img"></div>
      <ul>
        <li @mouseover="fn1(1)">
          <span>1</span>
        </li>
        <li @mouseover="fn1(2)">
          <span>2</span>
        </li>
        <li @mouseover="fn1(3)">
          <span>3</span>
        </li>
      </ul>
    </div>
    <div class="bookleft" :style="{display:isfirst1}">
      <div class="one1">
        <p class="num">1.</p>
        <div class="img"></div>
        <a href>迷案鉴赏</a>
        <div class="star"></div>
        <p class="price"> </p>
        <p class="content">码头工人姜尼·桑托罗杀害女友案成了芝加哥头条新闻。大多数芝加哥人都觉得他有罪，艾利却发现了桑托罗不在现场的铁证。此后艾利的日子开始不得安宁：不仅被一辆可疑的汽车跟踪，芝加哥的黑帮大佬也来逼她置身事外，甚至FBI也来调查她……</p>
      </div>
    </div>
    <div class="bookleft" :style="{display:issecond2}">
    <div class="one1">
        <p class="num">1.</p>
        <div class="img"></div>
        <a href>红楼梦</a>
        <div class="star"></div>
        <p class="price"> </p>
        <p class="content">码头工人姜尼·桑托罗杀害女友案成了芝加哥头条新闻。大多数芝加哥人都觉得他有罪，艾利却发现了桑托罗不在现场的铁证。此后艾利的日子开始不得安宁：不仅被一辆可疑的汽车跟踪，芝加哥的黑帮大佬也来逼她置身事外，甚至FBI也来调查她……</p>
      </div></div>
    <div class="bookleft" :style="{display:isthird3}">
    <div class="one1">
        <p class="num">1.</p>
        <div class="img"></div>
        <a href>神奇校车</a>
        <div class="star"></div>
        <p class="price"> </p>
        <p class="content">码头工人姜尼·桑托罗杀害女友案成了芝加哥头条新闻。大多数芝加哥人都觉得他有罪，艾利却发现了桑托罗不在现场的铁证。此后艾利的日子开始不得安宁：不仅被一辆可疑的汽车跟踪，芝加哥的黑帮大佬也来逼她置身事外，甚至FBI也来调查她……</p>
      </div></div>

    <div class="authorright">右边</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isfirst1: "block",
      issecond2: "none",
      isthird3: "none"
    };
  },
  methods: {
    fn1: function(i) {
      if (i == 1) {
        this.isfirst1 = "block";
        this.issecond2 = "none";
        this.isthird3 = "none";
      } else if (i == 2) {
        this.isfirst1 = "none";
        this.issecond2 = "block";
        this.isthird3 = "none";
      } else if (i == 3) {
        this.isfirst1 = "none";
        this.issecond2 = "none";
        this.isthird3 = "block";
      }
    }
  }
};
</script>
<style  scoped>
.maybelike {
  width: 1204px;
  height: 500px;
  border: 1px solid blue;
  margin-left: 108px;
  position: relative;
  margin-top: 20px;
}
.maybelike .maylikeimg {
  height: 50px;
  width: 952px;
  border: 1px solid blueviolet;
  display: flex;
}
.maybelike .maylikeimg .img {
  width: 108px;
  height: 50px;
  border: 1px solid green;
}
.maybelike .maylikeimg ul {
  padding: 0;
  margin: 0;
  float: left;
  margin-left: 550px;
}
.maybelike .maylikeimg ul li {
  list-style: none;
  display: inline-block;
  width: 90px;
  height: 34px;
  float: none;
  margin-top: 16px;
  cursor: pointer;
}
.maybelike .maylikeimg ul li span {
  display: inline-block;
  width: 90px;
  height: 34px;
  text-align: center;
}
.maybelike .maylikeimg ul li span:hover {
  color: aqua;
  border: 2px solid red;
}

.maybelike .bookleft {
  width: 952px;
  height: 447px;
  border: 1px solid forestgreen;
  display: inline-block;
}
.maybelike .bookleft .one1 {
  height: 248px;
  width: 950px;
  border: 1px solid brown;
  position: relative;
}
.maybelike .bookleft .one1 .num {
  margin: 0;
  font-size: 18px;
  color: red;
  font-weight: bold;
  margin-bottom: 4px;
  margin-left: 8px;
  margin-top: 4px;
}
.maybelike .bookleft .one1 .img {
  width: 200px;
  height: 200px;
  border: 1px solid blue;
  position: absolute;
  left: 30px;
}
.maybelike .bookleft .one1 a {
  position: absolute;
  left: 250px;
  text-decoration: none;
  color: black;
}
.maybelike .bookleft .one1 .star{
  width: 65px;
  height: 13px;
  border: 1px solid black;
  position: absolute;
   left: 250px;
   top: 60px;
}
.maybelike .bookleft .one1 .price{
  width: 690px;
  height: 24px;
  border: 1px solid darkviolet;
  position: absolute;
  left: 250px;
   top: 70px;
}
.maybelike .bookleft .one1 .content{
  position: absolute;

   top: 106px;
  left: 250px;
  line-height: 24px;
  overflow: hidden;
  word-break: break-all;
  color: #666;
  font-size: 6px;



}

.maybelike .authorright {
  width: 242px;
  height: 500px;
  border: 1px solid black;
  position: absolute;
  top: 0px;
  left: 960px;
}
</style>
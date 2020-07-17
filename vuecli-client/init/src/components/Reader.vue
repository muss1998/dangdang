<template>
  <div class="maybelike">
    <div class="maylikeimg">
      <div class="img"></div>
      <ul>
        <li @mouseover="fn1(1)">
          <span>好评最多</span>
        </li>
        <li @mouseover="fn1(2)">
          <span>最受关注</span>
        </li>
        <li @mouseover="fn1(3)">
          <span>人气收藏</span>
        </li>
      </ul>
    </div>
    <div class="bookleft" :style="{display:isfirst1}">
      <div class="one1">
        <p class="num">1.</p>
        <div class="img">
          <img src="http://img3m1.ddimg.cn/66/36/28470981-1_b_3.jpg" alt />
        </div>
        <a href>迷案鉴赏</a>
        <div class="star"></div>
        <p class="price">
          当当价
          <span style="color:red">：¥37.90</span>
        </p>
        <p
          class="content"
        >码头工人姜尼·桑托罗杀害女友案成了芝加哥头条新闻。大多数芝加哥人都觉得他有罪，艾利却发现了桑托罗不在现场的铁证。此后艾利的日子开始不得安宁：不仅被一辆可疑的汽车跟踪，芝加哥的黑帮大佬也来逼她置身事外，甚至FBI也来调查她……</p>
      </div>
      <div class="zuoping">
          <books></books>
          <books></books>
          <books></books>
          <books></books>
        </div>
    </div>
    <div class="bookleft" :style="{display:issecond2}">
      <div class="one1">
        <p class="num">2.</p>
        <div class="img"><img src="http://img3m5.ddimg.cn/8/24/24015725-1_b_11.jpg" alt=""></div>
        <a href>你的善良必须有点锋芒(在得寸进尺的人面前，你的善良其实一文不值。与人为善，不可失去底线。)</a>
        <div class="star"></div>
        <p class="price">
          当当价
          <span style="color:red">：¥28.60</span>
        </p>
        <p
          class="content"
        >什么时候打开都不晚的心灵开悟之书。如果你习惯了吃亏，习惯了沉默，习惯了委屈自己，习惯了不拒绝所有人，便会忘记其实你可以有态度，可以有观点，可以有能力，可以有自己从容的生活。36段过往的人生故事，多维度层层剥开36种隐秘心理与生活真相。这样的故事你也许没有读过，但你一定能感同身受。推荐您购买文通天下其他畅销书：</p>
      </div>
      <div class="zuoping">
          <books></books>
          <books></books>
          <books></books>
          <books></books>
        </div>
    </div>
    <div class="bookleft" :style="{display:isthird3}">
      <div class="one1">
        <p class="num">3.</p>
        <div class="img"><img src="http://img3m8.ddimg.cn/82/19/25252408-1_b_22.jpg" ></div>
        <a href>神奇校车·图画书版（全12册，新增科学博览会1册）</a>
        <div class="star"></div>
        <p class="price">
          当当价
          <span style="color:red">：¥196.00</span>
        </p>

        <p
          class="content"
        >神奇校车》是一套将奇特想象和抽象的科学知识完美融合的科普绘本，情节惊险刺激，语言生动爆笑，对话童稚可爱，知识却清晰严谨，展示了一种新奇的、迷人的、另类的自然科学教育方式。　　在一次次不可思议的神奇之旅中，在孩子们体验原理、学会操作、懂得思考、爱上科学，这样一套书，让孩子们大呼好看，让家长老师们频频推荐，让出版界叹为观止。不愧是迄今为止，世界上*畅销、*受欢迎、*棒的也是堪称经典的儿童科学图画书。《神奇校车》是美国学子出版社畅销不止的重点品，出版25年来，在美国销售逾5800万册，已被译成10多种语言，行销全球。　《神奇校车》图画书系列，包括《科学博览会》《水的故事》</p>
      </div>
      <div class="zuoping">
          <books></books>
          <books></books>
          <books></books>
          <books></books>
        </div>
    </div>

    <div class="authorright">
      <h3>当当读书社区</h3>
      <h3 style="color:#487A6F">赛雷三分钟漫画中国史</h3>
      <h4>超有趣的全彩漫画中国史</h4>
      <img src="http://img3m4.ddimg.cn/13/9/1901216704-1_l_3.jpg" alt="">
      <p>以大家习惯的时间线索来刻画中国史，赛雷第二本漫画中国史包含西汉、东汉和三国三个大的历史时期，每一段历史时期都抓住大的历史事件，以赛雷的爆笑风格来刻画人物和事件，几乎每页都有让人会心一笑的梗，让人在哈哈哈大笑中通晓中国历史的脉络以及关键事件。"</p>
    </div>
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
  components: {
    books: () => import("@/components/books")
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
.authorright p{
  font-size: 12px;
} 
.authorright img{
  margin: 30px;
}
h3 {
  text-align: center;
}
h4{
  text-align: center;
}
.zuoping {
  display: flex;
  width: 808px;
  height: 200px;
  position: relative;
  overflow: hidden;
  top: 0;
  justify-content: space-around;
}
.maybelike {
  width: 1204px;
  height: 500px;
  margin-left: 108px;
  border: 1px solid #666;
  position: relative;
  margin-top: 20px;
}
.maybelike .maylikeimg {
  height: 50px;
  width: 952px;
  display: flex;
}
.maybelike .maylikeimg .img {
  width: 108px;
  height: 50px;
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
}

.maybelike .bookleft {
  width: 952px;
  height: 447px;
  display: inline-block;
}
.maybelike .bookleft .one1 {
  height: 248px;
  width: 950px;
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
  position: absolute;
  left: 30px;
}
.maybelike .bookleft .one1 a {
  position: absolute;
  left: 250px;
  text-decoration: none;
  color: black;
}
.maybelike .bookleft .one1 .star {
  width: 65px;
  height: 13px;
  position: absolute;
  left: 250px;
  top: 60px;
}
.maybelike .bookleft .one1 .price {
  width: 690px;
  height: 24px;
  position: absolute;
  left: 250px;
  top: 70px;
  font-size: 13px;
}
.maybelike .bookleft .one1 .content {
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
  position: absolute;
  top: 0px;
  left: 960px;
}
</style>
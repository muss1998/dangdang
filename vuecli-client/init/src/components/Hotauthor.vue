<template>
  <div class="allpage">
    <div class="hotauthor">
      <div class="toptitle">
        <ul>
          <li @mouseover="fn(1)">
            <span>热门作者</span>
          </li>
          <li @mouseover="fn(2)">
            <span>名人堂</span>
          </li>
          <li @mouseover="fn(3)">
            <span>新锐作者</span>
          </li>
        </ul>
      </div>
      <div class="bottomtitle" :style="{display:isfirst}">
        <div class="introduce">
          <span>111111</span>
          <img class="authorimg" src="http://img55.ddimg.cn/9002790059832035.jpg" alt />
          <a href>麦家</a>
          <p>1986年开始写作，著有长篇小说《解密》《暗算》《风声》等。2008年，《暗算》获第七届茅盾文学奖。 作品被译为30多种语言。其中，《解密》《暗算》入选“企鹅经典”文库；2014年《解密》被英国《经济学人》评为“全·球年度十·佳小说”，2015年获美国CALA ZUI佳图书奖，2017年被英国《每日电讯报》选入“ZUI佳20部间谍小说”。 2019年，出版长篇小说《人生海海》。</p>
        </div>
        <div class="paihangbang">
          <li>
            <span>111</span>
          </li>
          <li>
            <span>222</span>
          </li>
          <li>
            <span>333</span>
          </li>
          <li>
            <span>444</span>
          </li>
          <li>
            <span>55</span>
          </li>
          <li>
            <span>666</span>
          </li>
          <li>
            <span>777</span>
          </li>
          <li>
            <span>888</span>
          </li>
          <li>
            <span>777</span>
          </li>
          <li>
            <span>55</span>
          </li>
        </div>
        <div class="zuoping">
        <books></books>
        <books></books>
        <books></books>
        <books></books>

        </div>
      </div>

      <div class="bottomtitle" :style="{display:issecond}">1112222</div>

      <div class="bottomtitle" :style="{display:isthird}">22223333</div>
    </div>

    <div class="hotimg"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isfirst: "block",
      issecond: "none",
      isthird: "none"
    };
  },
  components: {
    books: () => import("@/components/books")
  },
  methods: {
    fn: function(i) {
      if (i == 1) {
        this.isfirst = "block";
        this.issecond = "none";
        this.isthird = "none";
      } else if (i == 2) {
        this.isfirst = "none";
        this.issecond = "block";
        this.isthird = "none";
      } else if (i == 3) {
        this.isfirst = "none";
        this.issecond = "none";
        this.isthird = "block";
      }
    }
  }
};
</script>

<style scoped>
.allpage {
  width: 1200px;
  height: 510px;
  border: 1px solid red;
  margin-top: 15px;
  margin-left: 106px;
  display: flex;
}
.allpage ul {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.allpage li {
  list-style: none;
  display: inline-block;
  width: 122px;
  height: 40px;
  border: 1px solid #eaeaea;
  cursor: pointer;
  line-height: 36px;
  font-weight: bold;
  color: #487a6f;
  text-align: center;
}
.allpage .toptitle ul li:hover {
  background-color: #f6f6f6;
  border-bottom: none;
  border-left: none;
  border-right: none;
  border-top: 2px solid #487a6f;
}

.allpage .hotauthor .toptitle {
  width: 950px;
  height: 42px;
  border: 1px solid black;
}

.allpage .hotauthor .bottomtitle {
  width: 950px;
  height: 462px;
  border: 1px solid yellow;
}
.allpage .hotauthor .bottomtitle .introduce {
  width: 750px;
  height: 195px;
  border: 1px solid red;
  position: relative;
}
.allpage .hotauthor .bottomtitle .introduce span {
  position: absolute;
  top: 0;
}
.allpage .hotauthor .bottomtitle .introduce a {
  position: absolute;
  top: 39px;
  left: 226px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  font-size: 18px;
}
.allpage .hotauthor .bottomtitle .introduce a:hover {
  text-decoration: underline;
  color: orange;
}
.allpage .hotauthor .bottomtitle .introduce p {
  position: absolute;
  top: 55px;
  left: 226px;
  overflow: hidden;
  height: 96px;
  color: #666;
  font-size: 10px;
  font-family: "Mircosoft yahei";
  line-height: 24px;
}
.allpage .hotauthor .bottomtitle .introduce .authorimg {
  position: absolute;
  top: 20px;
  left: 55px;
}
.allpage .hotauthor .bottomtitle .paihangbang {
  position: relative;
  width: 132px;
  height: 448px;
  border: 1px solid black;
  top: -183px;
  left: 810px;
}
.allpage .hotauthor .bottomtitle .paihangbang span {
    color: black;
}
.allpage .hotauthor .bottomtitle .zuoping{
   display: flex;
    width: 808px;
    height: 200px;
    border: 1px solid blue;
    position: relative;
    overflow: hidden;
    top: -415px;
    justify-content: space-around;
}
.allpage .hotimg {
  border: 1px solid blue;
  width: 240px;
  height: 510px;
  margin-left: 6px;
}
</style>>


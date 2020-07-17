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
          <img class="authorimg" src="http://img55.ddimg.cn/9002790059832035.jpg" alt />
          <a href>麦家</a>
          <p>1986年开始写作，著有长篇小说《解密》《暗算》《风声》等。2008年，《暗算》获第七届茅盾文学奖。 作品被译为30多种语言。其中，《解密》《暗算》入选“企鹅经典”文库；2014年《解密》被英国《经济学人》评为“全·球年度十·佳小说”，2015年获美国CALA ZUI佳图书奖，2017年被英国《每日电讯报》选入“ZUI佳20部间谍小说”。 2019年，出版长篇小说《人生海海》。</p>
        </div>
        <div class="paihangbang">
          <li>
            <span>1 余华</span>
          </li>
          <li>
            <span>2 郑渊洁</span>
          </li>
          <li>
            <span>3 余秋雨</span>
          </li>
          <li>
            <span>4 曹文轩</span>
          </li>
          <li>
            <span>5 莫言</span>
          </li>
          <li>
            <span>6 村上春树</span>
          </li>
          <li>
            <span>7 东野圭吾</span>
          </li>
          <li>
            <span>8 大冰</span>
          </li>
          <li>
            <span>9 张嘉佳</span>
          </li>
          <li>
            <span>10 沈石溪</span>
          </li>
        </div>
        <div class="zuoping">
          <books></books>
          <books></books>
          <books></books>
          <books></books>
        </div>
      </div>

      <!-- 名人堂 -->
      <div class="positionfa bottomtitle" :style="{display:issecond}">
        <div class="famousauthor">
          <img class="famousauthorimg" src="http://img51.ddimg.cn/9006170038693151.jpg" alt />
          <h3>DTT</h3>
          <div
            class="famousauthorin"
          >畅销书作家。文学影视项目策划编辑，先后供职于阿里巴巴、爱奇艺等知名互联网企业。自我诊断：过期少女。间歇性中二病患者。以笔名DTT出版了长篇小说《时光机》、随笔集《愿所有相遇，都恰逢其时》，其中《愿所有相遇，都恰逢其时》深受读者喜爱，畅销60万册</div>
        </div>
        <div class="positionfau">
          <div class="flex">
            <div>
              <img src="http://img3m6.ddimg.cn/98/0/28974626-1_l_3.jpg" />
            </div>
            <div>
              <span>愿所有相遇，都恰逢其时（精装典藏版）</span>
              <p style="color:red">¥53.10</p>
              <p>结束的，已经结束，相逢的，终将遇见，不早不晚。只有放下对所谓幸福的执念，不乱于心,不困于情，才能了悟不辜负自己，别亏待光阴，时间自会给你答案。作家DTT用温暖而又朴实的笔触，娓娓道来。48篇暖意萦怀的生活感悟，用光阴的细碎勾勒出成长的轨迹，将生活的景致安放于岁月的涟漪，陪你成为有趣而不扭曲的人，过努力但不纠结的人</p>
            </div>
          </div>
          <div class="famousbooks">
            <p>
              该作者的其他作品：
              <span>愿所有相遇，都恰逢其时</span>
              <span>时光机</span>
            </p>
            <p>
              该作者推荐的图书：
              <span>此刻的温柔</span>
              <span>分开旅行</span>
              <span>愿你有英雄呵护，也有勇气独立</span>
            </p>
            <p>
              喜欢该作者还喜欢：
              <span>乔家的儿女</span>
              <span>琉璃美人煞：十周年典藏版</span>
              <span>我的漂亮朋友</span>
              <span>深宫缭乱</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 新锐作者 -->
      <div class="bottomtitle positionfa" :style="{display:isthird}">
        <div class="famousauthor">
          <img class="famousauthorimg" src="http://img62.ddimg.cn/topic_img/gys_0016105/dm.jpg" alt />
          <h3>丁墨</h3>
          <div
            class="famousauthorin"
          >丁墨 高人气作家，以独特的甜宠悬爱风格自成一派，被读者赞誉“又甜又刺激，又萌又感动”“开创了全新的言情小说模式”。 其作品多次横扫各大畅销书排行榜，且均被改编为热门影视，并掀起收视风潮。 已出版作品： 《他来了，请闭眼》 《他来了请闭眼</div>
          <div class="positionfau">
            <div class="flex">
              <div>
                <img src="http://img3m0.ddimg.cn/44/6/28977740-1_l_8.jpg" />
              </div>
              <div>
                <span>暮山见忘集</span>
                <p style="color:red">¥29.30</p>
                <p>这本书中收录了丁墨精彩纷呈的脑洞作品，故事题材迥异、美妙神奇，又不乏反转跌宕、大快人心。有平凡女孩与商业大鳄的浪漫奇缘，有现实物欲与灵魂相契的自我挣扎，有摄魂蚀骨一生的人妖之恋，有跨越星际的相互守候，有执着千年的跨时空爱恋，有警察与罪</p>
              </div>
            </div>
            <div class="famousbooks">
              <p>
                该作者的其他作品：
                <span>待我有罪时套装（全三册</span>
                <span>独家占有（全二册）</span>
                <span>乌云遇皎月（全二册）</span>
              </p>
              <p>
                该作者推荐的图书：
                <span>优雅是种力量</span>
                <span>分开旅行</span>
                <span>愿你有英雄呵护，也有勇气独立</span>
              </p>
              <p>
                喜欢该作者还喜欢：
                <span>秦俑两千年</span>
                <span>一本不正经的博物志</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hotimg">
      <img src="http://img63.ddimg.cn/upload_img/00785/ts/240x120-1585798700.jpg" alt />
      <img src="http://img60.ddimg.cn/upload_img/00754/suishiqi/tstm_240x120_1213_1-1553744462.jpg" alt />
      <img src="http://img62.ddimg.cn/upload_img/00791/xmj/youce-1591164433.jpg" alt />
      <img src="http://img63.ddimg.cn/ddreader/dangebook/7y20ylq_240x120.jpg" alt />
    </div>
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
.famousbooks p {
  margin-top: 30px;
}
.positionfau {
  font-size: 14px;
  width: 680px;
  position: absolute;
  top: 30px;
  right: 30px;
}
.positionfa {
  position: relative;
}
.famousauthorin {
  width: 150px;
  font-size: 13px;
  margin-left: 30px;
  color: #666;
}
h3 {
  text-align: center;
}
.famousauthorimg {
  width: 150px;
  height: 150px;
  margin: 30px 30px 0 30px;
}
.famousauthor {
  height: 100%;
  width: 210px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.allpage {
  width: 1200px;
  height: 510px;
 border: 1px solid #eaeaea;
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

}

.allpage .hotauthor .bottomtitle {
  width: 950px;
  height: 462px;
}
.allpage .hotauthor .bottomtitle .introduce {
  width: 750px;
  height: 195px;
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
  top: -183px;
  left: 810px;
}
.allpage .hotauthor .bottomtitle .paihangbang span {
  color: black;
}
.allpage .hotauthor .bottomtitle .zuoping {
  display: flex;
  width: 808px;
  height: 200px;
  position: relative;
  overflow: hidden;
  top: -415px;
  justify-content: space-around;
}
.allpage .hotimg {
  width: 240px;
  height: 510px;
  margin-left: 6px;
}

</style>>


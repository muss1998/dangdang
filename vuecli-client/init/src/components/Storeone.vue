<template>
  <div class="Storeone">
    <div class="left">
      <div class="headertop">图书分类</div>
      <div class="levelone">
        <span>特色书单</span>
      </div>
      <div class="levelone">
        <span>电子书 网络文学</span>
      </div>
      <div class="levelone">
        <span>教育</span>
      </div>
      <div class="levelone">
        <span>小说</span>
      </div>
      <div class="levelone">
        <span>文艺</span>
      </div>
      <div class="levelone">
        <span>青春文学/动漫 幽默</span>
      </div>
      <div class="levelone">
        <span>童书</span>
      </div>
      <div class="levelone">
        <span>人文社科</span>
      </div>
      <div class="levelone">
        <span>经管</span>
      </div>
      <div class="levelone">
        <span>成功/励志</span>
      </div>
      <div class="levelone">
        <span>生活</span>
      </div>
      <div class="levelone">
        <span>科技</span>
      </div>
      <div class="levelone">
        <span>英文原版书 港台图书</span>
      </div>
      <div class="levelone">
        <span>当当出版</span>
      </div>
      <div class="levelone">
        <span>期刊/音像</span>
      </div>
    </div>
    <div class="mid">
      <div class="lunbo">
        <Lunbo></Lunbo>
      </div>
      <div class="titlebooks">
        <img src="../../img/xinshushangjia.png" alt width="750px" />
        <div class="books" v-for="(item,index) in bookname" :key="index" @click="gotodetail(item.gid)">
          <div class="mybooks">
            <img :src="item.imgsrc" alt width="100%" height="150px" />
            <p class="title">{{item.goodsname}}</p>
            <p>{{item.author}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="activelife">
        <h3>最新动态</h3>
        <a href>· 十万童书，每满100减50</a>
        <br />
        <a href>· 悦小说品文学，每满100减50</a>
        <br />
        <a href>· 青春动漫，励志人生，每满100减50</a>
      </div>
      <div class="ordersell">
        <h3>新书预售</h3>
        <div class="block" style="margin-top:10px">
          <el-carousel height="170px">
            <el-carousel-item v-for="(item,index) in newbooks" :key="index" style="display:flex">
              <img :src="item.imgsrc" alt width="100px" height="120px" />
              <div style="margin-left:10px">
                <span class="newbookstitle">{{item.title}}</span>
                <br />
                <span>{{item.price}}</span>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="hoticon">新书热卖榜</div>
      <div class="hotbooks">
        <al-accordion>
          <template v-slot:one>
            <div style="height:100px;display:flex">
              <img
                src="http://img3m8.ddimg.cn/60/20/28984488-1_l_3.jpg"
                alt
                width="90px"
                height="100px"
              />
              <div style="margin-left:10px;font-size:14px">
                <span class="newbookstitle">一个人就一个人（2020刘同全新作品。很少有人像他一样时刻记录生活，细碎、日常、温暖。）</span>
                <br />
                <span>￥34.4</span>
              </div>
            </div>
          </template>
          <template v-slot:two>
            <div style="height:100px">
              <div style="height:100px;display:flex">
                <img
                  src="http://img3m6.ddimg.cn/33/8/28549356-1_l_15.jpg"
                  alt
                  width="90px"
                  height="100px"
                />
                <div style="margin-left:10px;font-size:14px">
                  <span class="newbookstitle">东野圭吾：祈念守护人（东野圭吾2020年全新长篇，全球同步发售）</span>
                  <br />
                  <span>￥59.9</span>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:three>
            <div style="height:100px">
              <div style="height:100px;display:flex">
                <img
                  src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                  alt
                  width="90px"
                  height="100px"
                />
                <div style="margin-left:10px;font-size:14px">
                  <span class="newbookstitle">半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                  <br />
                  <span>￥41.2</span>
                </div>
              </div>
            </div>
          </template>
           <template v-slot:four>
            <div style="height:100px">
              <div style="height:100px;display:flex">
                <img
                  src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                  alt
                  width="90px"
                  height="100px"
                />
                <div style="margin-left:10px;font-size:14px">
                  <span class="newbookstitle">半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                  <br />
                  <span>￥41.2</span>
                </div>
              </div>
            </div>
          </template> <template v-slot:five>
            <div style="height:100px">
              <div style="height:100px;display:flex">
                <img
                  src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                  alt
                  width="90px"
                  height="100px"
                />
                <div style="margin-left:10px;font-size:14px">
                  <span class="newbookstitle">半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                  <br />
                  <span>￥41.2</span>
                </div>
              </div>
            </div>
          </template> <template v-slot:six>
            <div style="height:100px">
              <div style="height:100px;display:flex">
                <img
                  src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                  alt
                  width="90px"
                  height="100px"
                />
                <div style="margin-left:10px;font-size:14px">
                  <span class="newbookstitle">半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                  <br />
                  <span>￥41.2</span>
                </div>
              </div>
            </div>
          </template> <template v-slot:seven>
            <div style="height:100px">
              <div style="height:100px;display:flex">
                <img
                  src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                  alt
                  width="90px"
                  height="100px"
                />
                <div style="margin-left:10px;font-size:14px">
                  <span class="newbookstitle">半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                  <br />
                  <span>￥41.2</span>
                </div>
              </div>
            </div>
          </template> <template v-slot:eight>
            <div style="height:100px">
              <div style="height:100px;display:flex">
                <img
                  src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                  alt
                  width="90px"
                  height="100px"
                />
                <div style="margin-left:10px;font-size:14px">
                  <span class="newbookstitle">半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                  <br />
                  <span>￥41.2</span>
                </div>
              </div>
            </div>
          </template> <template v-slot:nine>
            <div style="height:100px">
              <div style="height:100px;display:flex">
                <img
                  src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                  alt
                  width="90px"
                  height="100px"
                />
                <div style="margin-left:10px;font-size:14px">
                  <span class="newbookstitle">半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                  <br />
                  <span>￥41.2</span>
                </div>
              </div>
            </div>
          </template>
        </al-accordion>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import alAccordion from "@/components/Alaccordion.vue";

export default {
  data() {
    return {
      bookname: [],
      newbooks: [
        {
          imgsrc: "http://img3m8.ddimg.cn/60/20/28984488-1_f_3.jpg",
          title:
            "一个人就一个人（2020刘同全新作品。很少有人像他一样时刻记录生活，细碎、日常、温暖。）",
          price: "￥34.4"
        },
        {
          imgsrc: "http://img3m5.ddimg.cn/19/20/28985635-1_f_9.jpg",
          title:
            "山河枕 （当当独家签名版 晋江超级大神墨书白经典古言权谋大戏！积分30亿！扶华、蓬莱客、女王不在家推荐！附赠书签+海报）",
          price: "￥77.7"
        },
        {
          imgsrc: "http://img3m0.ddimg.cn/59/5/28969340-1_f_6.jpg",
          title:
            "我的第一套幼儿百科（超值礼盒装，精装全14册，德国经典幼儿百科！”WAS IST WAS“（什么是什么）是源自德国的科普品牌，专为学龄前儿童设计，内容贴近生活，幼儿园孩子必备小百科！）",
          price: "￥277.2"
        },
        {
          imgsrc: "http://img3m7.ddimg.cn/72/6/28987767-1_f_3.jpg",
          title: "骗局：美国商业欺诈简史",
          price: "￥77.42"
        },
        {
          imgsrc: "http://img3m8.ddimg.cn/23/9/28973858-1_f_3.jpg",
          title:
            "赛雷三分钟漫画人类简史（知乎评分9.8！3分钟解答人类终极三问！100万知友在看的历史科普书！）",
          price: "￥24.9"
        }
      ]
    };
  },
  components: {
    books: () => import("@/components/books"),
    Lunbo: () => import("@/components/Lunbo"),
    alAccordion
  },
  mounted() {
    axios.get("http://localhost:7001/allbooks?pageNum=8&num=1").then(res => {
      this.bookname = res.data.books;
      console.log(res.data);
    });
  },
  methods:{
    gotodetail(gid){
      this.$router.push({path:"/detail",query:{gid:gid}})
    }
  }
};
</script>

<style scoped="scoped">
.Storeone {
  width: 1200px;
  height: 876px;
  margin-left: 111px;
  margin-bottom: 20px;
  display: flex;
}
.Storeone .left {
  border: 1px solid #487a6f;
  height: 876px;
  width: 188px;
  cursor: pointer;
}

.Storeone .mid {
  width: 750px;
  margin-left: 6px;
  margin-right: 6px;
}

.Storeone .mid .lunbo {
  width: 730px;
  height: 315px;
  /* border: 1px solid black; */
}
.Storeone .mid .titlebooks {
  width: 100%;
  height: 43px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.Storeone .mid .titlebooks .books {
  display: inline-block;
  width: 160px;
  height: 200px;
  margin-left: 20px;
  margin-top: 30px;
  text-align: center;
}
.title {
  width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  margin: 4px auto;
}
.Storeone .left .levelone {
  height: 50px;
  color: #487a6f;
  font-family: "Microsoft Yahei";
  font-weight: bold;
  padding-left: 4px;
  text-align: center;
  line-height: 50px;
}
.Storeone .left .levelone span {
  display: block;
  width: 170px;
  height: 24px;
  display: block;
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  border-bottom: 1px dotted #849555;
  margin-left: 9px;
  position: relative;
  overflow: hidden;
  padding-top: 3px;
  padding-bottom: 2px;
}

.Storeone .left .headertop {
  height: 35px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  background: #487a6f;

  line-height: 34px;
  color: #fff;
  font-family: "Microsoft Yahei";
}

.Storeone .right {
  
  height: 876px;
  width: 188px;
}
.Storeone .right .activelife {
  width: 240px;
  height: 110px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
}
.Storeone .right .activelife a {
  font-size: 13px;
  color: #000;
  text-decoration: none;
}
.Storeone .right .activelife a:hover {
  color: #ec7814;
  text-decoration: underline;
}

.Storeone .right .ordersell {
  width: 240px;
  height: 193px;
  margin-top: 9px;
  margin-bottom: 4px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
}
.Storeone .right .hoticon {
  width: 240px;
  height: 40px;
  padding: 10px;
  box-sizing: border-box;
  color: #d72832;
  font-weight: bold;
}
.Storeone .right .hotbooks {
  width: 238px;
  height: 510px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #eaeaea;
}
.newbookstitle {
  width: 100px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 将对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 3; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
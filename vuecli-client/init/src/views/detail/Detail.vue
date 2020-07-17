<template>
  <div class="detail">
    <div class="img">
      <img class="mimg" src="http://img63.ddimg.cn/2020/7/3/2020070314593149542.jpg" alt />
    </div>
    <div class="content">
      <div class="wenzi">
        <span>
          <h4>图书</h4>
        </span>>
        <span>亲子/家教</span>>
        <span>家教方法</span>>
        <span>给孩子的思维导图</span>:
        <span>受益一生的阅读力训练 名师深度解析阅读的...</span>
      </div>
      <div class="middle">
        <div class="leftmi">
          <img class="imgsrc" :src="goodstail.imgsrc" alt />
        </div>
        <div class="rightmi">
          <div class="keywods">
            <h2>{{goodstail.goodsname}}</h2>
            <p>
              {{goodstail.keywords}}
              <a
                href
              >每满100减50</a>
              >>
            </p>
          </div>
          <div class="authopj">
            <p>作者：{{goodstail.author}}</p>
            <br />
            <div class="authopjm">
              <div class="block">
                <span class="demonstration"></span>
                <el-rate v-model="value1"></el-rate>
              </div>
              <p>{{goodstail.pjnumber}}条评论</p>
            </div>
          </div>
          <div class="priceopj">
            <p style="display: inline-block;">当当价</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h5 style="display: inline-block;">降价通知</h5>
            <h1>￥{{goodstail.price}}</h1>
            <div class="priceopjimg">
              <img src="http://img7x5.ddimg.cn/imgother121/37/31/28972585_1.jpg" alt />
            </div>
          </div>

          <div class="xiangqing">
            <div style="margin-top: 10px;">
              <span style="background-color: red; ">电子书加购价：</span>
              <span style="border: 1px dashed grey;">买满￥100减50</span>
              <span>详情</span>
            </div>
            <br />
            <div>
              <span style="background-color: red; ">满额价：</span>
              <span>买满￥100减50</span>
              <span>详情</span>
            </div>
            <br />
            <div>
              <span style="background-color: red; ">加购价：</span>
              <span>购买本商品可加价换购以下任意一件商品</span>
              <span>详情</span>
            </div>
            <br />
            <div class="box">
              <div class="boxl">
                <div class="boxlnei">
                  <img src="http://img3m4.ddimg.cn/74/19/1524982214-1_x_10.jpg" alt />
                  <span>当当优课 LikeABC青少儿童英语口语一对一 英语学习在线课程 欧</span>
                </div>
              </div>
              <div class="boxr">
                <div class="boxrnei">
                  <img src="http://img3m0.ddimg.cn/94/27/1579007920-1_x_2.jpg" alt />
                  <span>当当优课【电子兑换码】T.E.T.教师效能训练（同名畅销书配套音频</span>
                </div>
              </div>
            </div>
            <p style="margin-top: 20px;">促销不可多选，请在购物车选择该单品能享受的促销</p>
          </div>

          <div class="buttom">
            <div class="buttonmm" style="display: inline-block;">
              {{num}}
              <div class="buttonjiu" style="display: inline-block;">
                <button @click="jia">+</button>
                <br />
                <button @click="jian">-</button>
              </div>
            </div>
            <div class="buttinmm" style="display: inline-block;">
              <!-- 	el-icon-shopping-cart-2 -->
              <!-- *********************点击加入购物车*************************** -->
              <div class="nirbut" @click="tocar">
                <i class="el-icon-shopping-cart-2"></i>
                加入购物车
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btnin">
      <div class="lefnau">
        <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
        <img src="http://img3m6.ddimg.cn/63/28/27887076-1_l_3.jpg" />
      </div>
      <div class="nautop">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="经常一起购买的商品" name="first" id="teshu">
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m3.ddimg.cn/48/0/28472943-1_l_4.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m3.ddimg.cn/48/0/28472943-1_l_4.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m2.ddimg.cn/45/11/28543032-1_l_3.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m3.ddimg.cn/48/0/28472943-1_l_4.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m2.ddimg.cn/45/11/28543032-1_l_3.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m3.ddimg.cn/48/0/28472943-1_l_4.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m3.ddimg.cn/48/0/28472943-1_l_4.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m3.ddimg.cn/48/0/28472943-1_l_4.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m3.ddimg.cn/48/0/28472943-1_l_4.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m2.ddimg.cn/45/11/28543032-1_l_3.jpg" />
            <img src="http://img3m0.ddimg.cn/66/8/410275470-1_l_2.jpg" />
            <img src="http://img3m2.ddimg.cn/45/11/28543032-1_l_3.jpg" />
            <img src="http://img3m4.ddimg.cn/11/27/28968104-1_b_3.jpg" />
          </el-tab-pane>
        </el-tabs>
        <!-- <div class="navtopnav">
					<div class="nautop">
						<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
						
						</el-tabs>
					</div>
        </div>-->
        <div class="navtopnav">
          <div class="nautopbtn">
            <h4>价格说明</h4>当当价：为商品的销售价，具体的成交价可能因会员使用优惠券、银铃铛等发生变化，最终以订单结算页价格为准。
            划线价：划线价格可能是图书封底定价、商品吊牌价、品牌专柜价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品曾经展示过的销售价等，由于地区、时间的差异化和市场行情波动，商品吊牌价、品牌专柜价等可能会与您购物时展示的不一致，该价格仅供您参考。
            折扣：折扣指在划线价（图书定价、商品吊牌价、品牌专柜价、厂商指导价等）某一价格基础上计算出的优惠比例或优惠金额。如有疑问，您可在购买前联系客服咨询。
            异常问题：如您发现活动商品销售价或促销信息有异常，请立即联系我们补正，以便您能顺利购物。
          </div>

          <!--评论*****************************************************************************************************************-->
          <div class="pinlinxinxi" v-if="flag">
            <div>
              <!-- 评论框的信息 -->
              <div class="pltopone">
                <div class="pltwo">短评</div>
                <div class="pltwo">长评</div>
              </div>

              <div class="pltoponebtn">
                <p>我对本书的评价是</p>
                <!-- <el-rate v-model="value" show-text>
                </el-rate>-->

                <el-rate v-model="value" show-score text-color="#ff9900" score-template="{value}"></el-rate>
              </div>

              <div class="inputexar">
                <textarea
                  type="text"
                  @input="inpy()"
                  v-model="msg"
                  placeholder="这本书的内容/作者/文笔....给你留下了怎么样的印象？是否值得推荐给其他书友？写下你的评论吧~"
                ></textarea>
              </div>
              <div>
                <el-upload
                  class="upload-demo"
                  action="http://localhost:7001/uploadImg"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :on-success="uploadimg"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList"
                >
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </div>
              <button @click="tijao">提交</button>
            </div>
          </div>
          <div class="divider">
            <el-divider></el-divider>
            <div class="divvi">
              <span>短评（4）</span>

              <div @click="vshow" style="background-color: red;" else="flag">写短评，赚银铃铛</div>
            </div>
          </div>
          <!-- 好评率************ -->
          <div class="pingluntu">
            <div class="hapinbox">
              <div class="haopinboxmin">
                <div class="haopinzui">
                  <div class="boxnei">好评率100%</div>
                </div>
              </div>
            </div>
            <div class="maiguo">
              <p>买过的人知道</p>
              <br />
              <el-button type="warning">内容丰富（1）</el-button>
              <el-button type="warning">实用（1）</el-button>
              <el-button type="warning">必备（1）</el-button>
              <el-button type="warning">必读（1）</el-button>
            </div>
            <!-- 全部评论 **************************************************************************************************************-->
            <div class="tianzhuan">
              <el-tabs type="border-card">
                <!-- 将评论的信息全部显示出来************************************************************************************************************ -->
                <el-tab-pane label="全部">
                  <div v-for="(item,index) in arr" :key="index" :goodsObj="item"  >
					  <div class="pjstyle" v-if="item.comments">{{item.comments}}</div>
					  <img :src="item.pjimg" style="width:100px;height:50px" v-if="item.pjimg">
				  </div>

                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "detail",
  data() {
    return {
      fileList: [],
      value1: null,
      value: null,
      goodstail: {},
      num: 1,
      gid: '',
      activeName: "first",
      flag: false,
      // flag1:"false"
      msg: "",
      img: "",
      arr: [],
      arguments: ""
    };
  },
  mounted() {
    var gid = this.$route.query.gid;
    var url = "http://localhost:7001/addDetail?gid=" + gid;
    axios
      .get(url, {
        withCredentials: true
      })
      .then(res => {
        this.goodstail = res.data[0];
	  });
	  //评论
	  axios
      .post("http://localhost:7001/showpl",{gid1:gid}, {
        withCredentials: true
      })
      .then(res => {
		// console.log(res)
		this.arr=res.data.data;
        console.log(res.data.data);
	  });

  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    uploadimg() {
      console.log("success");
      console.log(arguments);
      this.arguments = arguments[0].data.src;
    },
    vshow() {
      // this.flag = true
      this.flag = !this.flag;
    },
    tijao() {
      console.log(this.value);
      this.flag = false;
      // console.log(arguments[0].data.src)
	  var url3 = `http://localhost:7001/detailpl`;
	  console.log(this.arguments)
      axios
        .post(
          url3,
          {
            img: this.arguments,
            score: this.value,
            gid: this.gid,
            comments: this.msg
          },
          {
            withCredentials: true
          }
        )
        .then(res => {
          console.log(res);
          // console.log(res.data)
          if (res.data.code == 200) {
            alert("添加成功！");
            // this.$router.push({
            // 	path: `/login?from:this.$route.path`,

            // })
          } else if (res.data.code == 300) {
            alert("添加失败！");
          }
        });

      console.log(this.$route.path);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    jia() {
      this.num++;
    },
    inpy() {
      console.log(this.msg);
    },
    jian() {
      this.num--;
      if (this.num < 0) {
        this.num = 0;
      }
    },
    tocar() {
      var num = this.num;

      var url1 = `http://localhost:7001/tocar`;
      axios
        .post(
          url1,
          {
            num: num,
            gid: this.gid
          },
          {
            withCredentials: true
          }
        )
        .then(res => {
          console.log(res);
          console.log(res.data);
          if (res.data.code == 4000) {
            alert("没有登录，请登录！");
            this.$router.push({
              path: "/login"
            });
          }
        });
    }
  },

  components: {
  }
};
</script>
<style>
.pjstyle{
	overflow: hidden;
	height: 150px;
	margin-top: 10px ;
	box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.detail {
  width: 1200px;
  /* height: 1200px; */
  /* border: 1px solid red; */
  margin: 0 auto;
}

.wenzi h4 {
  display: inline;
}

.img,
.mimg {
  width: 100%;
  height: 60px;
  /* margin: 0 auto; */
}

.content {
  width: 100%;
  height: 1200px;
  margin: 0 auto;
  /* border-bottom: 2px dashed grey; */
}

/* 书本放大与信息详情 */
.middle {
  width: 1180px;
  /* border: 1px solid forestgreen; */
  margin: 0 auto;
}

.leftmi {
  width: 28%;
  height: 600px;
}

.imgsrc {
  width: 100%;
  height: 498px;
  border: 1px solid #606266;
}

.imgtable tr td {
  width: 100px;
  height: 80px;
  border: 1px solid #000000;
}

.rightmi {
  width: 70%;
  height: 500px;

  float: right;
}

.leftmi,
.rightmi {
  display: inline-block;
}

/* 右边框内部 */
.keywods {
  width: 100%;
  height: 200px;
  border-bottom: 1px dashed grey;
}

.authopj {
  width: 100%;
  height: 100px;
  /* border: 1px solid gray; */
  margin-bottom: 40px;
}

.priceopj {
  width: 100%;
  height: 200px;
  border: 1px solid grey;
  position: relative;
  background-color: orangered;
}

.priceopjimg {
  width: 400px;
  height: 200px;
  display: inline-block;
  position: relative;
  top: 0;
  right: -239px;
  background-color: orangered;
}

.priceopjimg img {
  width: 200px;
  height: 200px;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
}

.priceopj h1 {
  display: inline-block;
}

.xiangqing {
  width: 100%;
  height: 200px;
  border-bottom: 1px dashed grey;
  padding-bottom: 40px;
}

.authopjm p {
  margin-top: 12px;
  font-size: 20px;
}

.authopjm {
  display: flex;
}

.priceopj {
  background-color: blanchedalmond;
}

.box {
  display: flex;
  justify-content: space-around;
}

.boxl {
  width: 300px;
  height: 70px;
  border: 2px dashed grey;
}

.boxr {
  width: 300px;
  height: 70px;
  border: 2px dashed grey;
}

.boxlnei {
  display: flex;
}

.boxrnei {
  display: flex;
}

.table tr td span {
  border: 1px solid grey;
  padding: 0;
  margin: 0;
}

.table tr td:first-child {
  width: 70px;
}

.butlef {
  display: inline-block;
}

.buttonmm {
  width: 100px;
  height: 49px;
  background-color: grey;
  position: relative;
}

.buttonmm button {
  height: 24px;
  width: 50px;
  position: relative;
  top: 0;
  right: -38px;
}

.buttinmm {
  width: 200px;
  height: 48px;
  border: 1px solid red;
  vertical-align: top;
  background-color: #ff0000;
  color: white;
  font-size: 26px;
}

[class*=" el-icon-"],
[class^="el-icon-"] {
  width: 30px;
  height: 30px;
  font-size: 34px;
  line-height: 44px;
}

.lefnau {
  width: 300px;

  border: #606266;
  display: inline-block;
  height: 1200px;
}

.lefnau img {
  width: 300px;
  height: 400px;
}

.nautop {
  display: inline-block;
  vertical-align: top;
  width: 800px;
}

.nautop p {
  font-size: 20px;
}

.el-tabs__item {
  color: #000000;
  font-size: 26px;
}

#pane-first {
  width: 800px;
  height: 500px;
}

.navtopnav {
  height: 600px;
}

#teshu {
  height: 820px;
}

.nautopbtn {
  background-color: darkgrey;
}

.divider {
  background-color: #cccccc;
  height: 50px;
  border-radius: 15px;
  text-indent: 20px;
  font-size: 20px;
}

.el-divider--horizontal {
  margin: 0;
}

.divvi div {
  height: 50px;
  /* line-height: 50px; */
  display: inline-block;
  font-size: 20px;
  border-radius: 15px;
}

.hapinbox {
  width: 200px;
  height: 200px;
  background-color: red;
  border: 1px green solid;
  border-radius: 50%;
  display: inline-block;
}

.haopinboxmin {
  width: 180px;
  height: 180px;
  margin: 10px auto;
  background-color: white;
  border: 1px white solid;
  border-radius: 50%;
}

.haopinzui {
  width: 150px;
  height: 150px;
  margin: 10px auto;
  background-color: peru;
  border-radius: 50%;
}

.haopinzui p {
  margin: auto;
}

.boxnei {
  width: 80px;
  height: 80px;
  margin: 50px 50px;
}

.divider {
  margin-bottom: 40px;
}

.divvi {
  display: flex;
  justify-content: space-between;
}

.maiguo {
  display: inline-block;
  height: 180px;
  width: 500px;
  vertical-align: top;
  margin-left: 30px;
}

.tianzhuan {
  margin-top: 40px;
}

.pinlinxinxi {
  width: 800px;
  height: 600px;
  position: absolute;
  z-index: 222;
  background-color: wheat;
  margin-top: 80px;
}

.pltopone {
  font-size: 26px;
  display: flex;
  justify-content: space-around;
  margin: 50px;
}

.pltoponebtn {
  margin-left: 50px;
}

.inputexar {
  width: 800px;
  margin-top: 50px;
}

.inputexar textarea {
  width: 600px;
  height: 140px;
  background-color: beige;
  margin: 0 100px;
}
</style>

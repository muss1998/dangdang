<template>
  <div class="only">
    <div class="only_left">
      <div class="left">
        <div class="headertitle">
          <img src="@/img/zhubiantuijian.png" alt />
        </div>
        <div class="headerright">
          <li :index="arr[0]" v-on:mouseover="my(arr[0])">主打</li>
          <li :index="arr[1]" v-on:mouseover="my(arr[1])">童书1</li>
          <li :index="arr[2]" v-on:mouseover="my(arr[2])">童书2打</li>
          <li :index="arr[3]" v-on:mouseover="my(arr[3])">文艺</li>
          <li :index="arr[4]" v-on:mouseover="my(arr[4])">小说</li>
          <li :index="arr[5]" v-on:mouseover="my(arr[5])">青春励志</li>
          <li :index="arr[6]" v-on:mouseover="my(arr[6])">社科</li>
          <li :index="arr[7]" v-on:mouseover="my(arr[7])">经营</li>
          <li :index="arr[8]" v-on:mouseover="my(arr[8])">生活</li>
          <li :index="arr[9]" v-on:mouseover="my(arr[9])">教育</li>
          <li :index="arr[10]" v-on:mouseover="my(arr[10])">电子书</li>
        </div>
      </div>
      <div>
        <div v-if="flag==0" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==1" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==2" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==3" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==4" class="allbooks">
           <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==5" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==6" class="allbooks">
         <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==7" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==8" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==9" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
        <div v-if="flag==10" class="allbooks">
          <div class="books" v-for="(item,index) in bookname" :key="index" >
            <img
              :src="item.imgsrc"
              alt
              width="120px"
              height="100px"
            />
            <p>{{item.title}}</p>
            <span>{{item.author}}</span>
            <p>{{item.price}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="only_right">
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
                <span
                  class="newbookstitle"
                >半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
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
                <span
                  class="newbookstitle"
                >半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                <br />
                <span>￥41.2</span>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:five>
          <div style="height:100px">
            <div style="height:100px;display:flex">
              <img
                src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                alt
                width="90px"
                height="100px"
              />
              <div style="margin-left:10px;font-size:14px">
                <span
                  class="newbookstitle"
                >半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                <br />
                <span>￥41.2</span>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:six>
          <div style="height:100px">
            <div style="height:100px;display:flex">
              <img
                src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                alt
                width="90px"
                height="100px"
              />
              <div style="margin-left:10px;font-size:14px">
                <span
                  class="newbookstitle"
                >半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                <br />
                <span>￥41.2</span>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:seven>
          <div style="height:100px">
            <div style="height:100px;display:flex">
              <img
                src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                alt
                width="90px"
                height="100px"
              />
              <div style="margin-left:10px;font-size:14px">
                <span
                  class="newbookstitle"
                >半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                <br />
                <span>￥41.2</span>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:eight>
          <div style="height:100px">
            <div style="height:100px;display:flex">
              <img
                src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                alt
                width="90px"
                height="100px"
              />
              <div style="margin-left:10px;font-size:14px">
                <span
                  class="newbookstitle"
                >半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                <br />
                <span>￥41.2</span>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:nine>
          <div style="height:100px">
            <div style="height:100px;display:flex">
              <img
                src="http://img3m8.ddimg.cn/38/25/28556588-1_l_5.jpg"
                alt
                width="90px"
                height="100px"
              />
              <div style="margin-left:10px;font-size:14px">
                <span
                  class="newbookstitle"
                >半小时漫画科学史（漫画式科普开创者二混子新作！从地心说到相对论，半小时读懂人类如何从蒙昧走向理性。）（随机专享签章版）</span>
                <br />
                <span>￥41.2</span>
              </div>
            </div>
          </div>
        </template>
      </al-accordion>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import alAccordion from "@/components/Alaccordion.vue";
export default {
  data() {
    return {
      nowindex: 0,
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      flag: 0,
       bookname: [],
    };
  },
  methods: {
    my(ev) {
      console.log(ev);
      this.flag = ev;
    }
  },
  mounted() {
    getindex: index => {
      console.log(index);
      this.nowindex = index;
    };
      axios.get("http://localhost:7001/allbooks?pageNum=10&num=1").then(res => {
      this.bookname = res.data.books;
      console.log(res.data);
    });
  },
  components: {
    alAccordion
  }
};
</script>

<style  scoped>
.only {
  width: 1200px;
  height: 582px;
  margin: 0 105.6px;
  display: flex;
}

.only .only_left {
  width: 950px;
  height: 582px;
}
.only .only_left .left {
  height: 47px;
  width: 950px;
  /* border-bottom: 1px solid #487a6f; */
  display: flex;
}
.only .only_left .left .headertitle {
  width: 108px;
  height: 33px;
}
.only .only_left .left .headertitle img {
  height: 40px;
  width: 110px;
}
.only .only_left .left .headerright {
  width: 788px;
  height: 35px;
  margin-top: 14px;
  margin-left: 48px;
}
.only .only_left .left .headerright li {
  list-style: none;
  display: inline-block;
  line-height: 32px;
  color: #666;
  font-size: 14px;
  font-family: "Microsoft yahei";
  text-align: center;
  width: 68px;
  cursor: pointer;
}
.only .only_left .left .headerright li:hover {
  border-radius: 6px 6px 0 0;
  border: 2px solid #487a6f;
  border-bottom: none;
  color: #4e8176;
  background: #fff;
  padding: 0 15px;
  font-weight: bold;
}

.only .only_right {
  height: 582px;
  width: 240px;
  border: 1px solid #eaeaea;
  margin-left: 6px;
  padding: 10px;
  box-sizing: border-box;
}
.allbooks {
  width: 100%;
  height: 520px;
  /* background-color: darkgrey; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.books {
  width: 160px;
  height: 200px;
  border: 1px solid #eaeaea;
  text-align: center;
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
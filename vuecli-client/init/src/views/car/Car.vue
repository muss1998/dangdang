<template>
  <div class="car">
    <div class="home">
      <el-page-header @back="goBack" content="购物车"></el-page-header>
    </div>
    <div class="dothing" v-show="flag2">
      <div class="allmoney">总计 {{count}} 元</div>
      <div class="thingbtn">
        <el-button type="primary" round @click="tobuy">提交订单</el-button>
      </div>
    </div>
    <div v-for="(item,index) in arr.result" :key="item.gid" v-show="flag2">
      <div class="box1">
        <img :src="item[0].imgsrc" />
        <div class="msg">
          <p class="goodsname">{{item[0].goodsname}}</p>
          <p>{{item[0].author}}</p>
          <p class="price">{{item[0].price}}元/本</p>
        </div>
        <div class="carnumber">
          <div class="delete">
            <el-button type="danger" icon="el-icon-delete" circle @click="deletebooks(index)"></el-button>
          </div>
          <br />
          <br />
          <el-input-number
            v-model="arr.data[index].number"
            :min="1"
            :max="100"
            label="描述文字"
            size="small"
            :disabled="isdisabled.indexOf(index)!=-1"
          ></el-input-number>
          <br />
          <br />
          <el-checkbox
            @change="handleChange({price:item[0].price,number:arr.data[index].number,index:index,item:item,selected:false})"
            size="medium"
          >结账</el-checkbox>
        </div>
      </div>
    </div>
    <div class="kong" v-show="flag">
      购物车空空如也哦~
      <el-button type="info" plain class="mybtn" @click="toadd">去添加</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { log } from "util";
export default {
  name: "Car",
  data() {
    return {
      arr: "",
      flag: "false", //空空如也
      flag2: "false", //购物车
      count: 0, //总计
      singlecount: 0, //
      isdisabled: [],
      carArr: [],
      username: "",
      gid: null
    };
  },

  components: {},
  methods: {
    goBack() {
      this.$router.push({ path: "/my" });
    },
    toadd() {
      this.$router.push({ path: "/" });
    },
    handleChange(obj) {
      // console.log(obj.item[0].gid);
      this.gid = obj.item[0].gid;
      this.singlecount = obj.price * obj.number;
      obj.item[0].selected = !obj.item[0].selected;
      if (obj.item[0].selected) {
        this.isdisabled.push(obj.index);
        this.getall();
      } else {
        this.isdisabled.shift(obj.index);
        this.suball();
      }
    },
    getall() {
      this.count += parseInt(this.singlecount);
    },
    suball() {
      this.count -= parseInt(this.singlecount);
    },
    tobuy() {
      // this.flag2 = false; //购物车
      // this.flag = false; //空空如也
      // var url = "http://localhost:7001/addnumber";
      // axios.post(url, {value:value}, { withCredentials: true }).then(res => {
      //    console.log(res);
      // })
      console.log(this.count);
      if (this.count != 0) {
        axios
          .post(
            "http://localhost:7001/addorder",
            // {gid,username,total}
            {
              username1: this.username,
              gid: this.gid,
              total: this.count
            },
            { withCredentials: true }
          )
          .then(res => {
            console.log(res);
          });
        this.$router.push({ path: "/order" });
      } else {
        alert("你还没有点击结账哦");
      }
    },
    deletebooks(index) {
      //删购物车
      this.cid = this.carArr[index].cid;
      // console.log(this.carArr[index].cid);
      var url = "http://localhost:7001/deleteCar";
      axios
        .post(
          url,
          { username1: this.username, cid: this.carArr[index].cid },
          { withCredentials: true }
        )
        .then(res => {
          if (res.data.code === 1) {
            alert("删除成功");
            this.$router.go(0);
          }
        });
    },
    getallcar() {
      axios
        .post(
          "http://localhost:7001/getcar",
          { username1: this.username },
          { withCredentials: true }
        )
        .then(res => {
          this.carArr = res.data;
        });
    }
  },

  mounted() {
    axios
      .post("http://localhost:7001/car", {}, { withCredentials: true })
      .then(res => {
        this.arr = res.data;
        console.log(res.data)
        if (res.data.data[0] != undefined) {
          this.username = res.data.data[0].username;
        }
        this.getallcar();
        if (res.data.result.length === 0) {
          this.flag = true;
          this.flag2 = false;
        } else {
          this.flag = false;
          this.flag2 = true;
        }
      });
  }
};
</script>
<style>
.car {
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
}
.box1 {
  margin: 10px auto;
  margin-bottom: 30px;
  width: 800px;
  height: 200px;
  border-radius: 10px;
  transition: box-shadow 0.5s;
  box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24), 0 0 8px rgba(10, 16, 20, 0.12);
  display: flex;
  position: relative;
}
.box1 img {
  width: 250px;
  height: 200px;
}
.goodsname {
  font-size: 24px;
}
.price {
  color: gray;
}
.msg {
  margin-left: 150px;
}
.carnumber {
  text-align: right;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
.kong {
  width: 700px;
  height: 300px;
  text-align: center;
  line-height: 300px;
  margin: 70px auto;
  font-size: 26px;
  font-family: "黑体";
  border-radius: 10px;
  transition: box-shadow 0.5s;
  box-shadow: 0 2px 2px rgba(10, 16, 20, 0.24), 0 0 2px rgba(10, 16, 20, 0.12);
  position: relative;
}
.kong .mybtn {
  position: absolute;
  top: 240px;
  right: 20px;
}
.allmoney {
  width: 200px;
  height: 40px;
  text-align: center;
  font-size: 20px;
}
.dothing {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 800px;
}
.delete {
  position: absolute;
  top: -60px;
  right: -16px;
}
</style>

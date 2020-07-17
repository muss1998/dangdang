<template>
  <div>
    <Header></Header>

    <Searchbutton @woclick="leilei"></Searchbutton>
    <Navtop></Navtop>
    <Sub></Sub>
    <Imgfloat></Imgfloat>
    <div class="center">
      <div class="bookitem" v-for="(item,index) in books" :key="index">
        <img :src="item.imgsrc" alt="" width="100px" height="100px">
        <p>{{item.goodsname}}</p>
        <p>{{item.author}}</p>

      </div>
    </div>
    <footers></footers>
    <router-view></router-view>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      books: []
    };
  },
  components: {
    Header: () => import("@/components/Header"),
    Navtop: () => import("@/components/Navtop"),
    Sub: () => import("@/components/Sub"),
    Imgfloat: () => import("@/components/Imgfloat"),

    footers: () => import("@/components/footers"),
    Searchbutton: () => import("@/components/Searchbutton")
  },
  methods: {
    leilei: function(el) {
      console.log(el);
    }
  },
  watch: {
    "$store.state.navInput": function() {
      axios
        .get(
          `http://localhost:7001/searchbooks?goodsname=${this.$store.state.navInput}`
        )
        .then(res => {
          console.log(1111111111);
          console.log(res.data);
          this.books = res.data;
        });
    }
  },
  mounted() {
    axios
      .get(
        `http://localhost:7001/searchbooks?goodsname=${this.$store.state.navInput}`
      )
      .then(res => {
        console.log(1111111112);
        console.log(res.data);
        this.books = res.data;
      });
  }
};
</script>
<style  scoped>
.center {
  width: 800px;
  height: 700px;
  margin: 0 auto;
  display: flex;
}
.bookitem {
  width: 150px;
  height: 180px;
  text-align: center;
  border: 1px solid darkgray;
}
</style>
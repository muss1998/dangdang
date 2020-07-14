<template>
  <div class="home">
    <el-page-header @back="goBack" content="购物车"></el-page-header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "Car",
  data() {
    return {
      arr: {},
      id: {
        username:'muss'
      }
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    goBack() {
      console.log("go back");
      this.$router.push({ path: "/my" });
    }
  },
  mounted() {
    var url = "http://localhost:7001/car";
    axios
      .post(url,this.id,{ withCredentials: true }) //传username，需缓存数据，待定
      .then(res => {
        console.log(res)
        // this.arr = res.data;
      });
  }
};
</script>
<style lang="stylus" scoped></style>

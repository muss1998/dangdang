<template>
  <div class="only">
    <div class="only_left">
      <div class="left">
        <div class="headertitle">
          <img src="" alt />
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
          <li :index="arr[10]"  v-on:mouseover="my(arr[10])">电子书</li>
        </div>
      </div>
      <div >
        <div v-if="flag==0">主打</div>
        <div v-if="flag==1">童主打书1</div>
        <div v-if="flag==2">童书2打</div>
        <div v-if="flag==3">文艺</div>
        <div v-if="flag==4">小说</div>
        <div v-if="flag==5">青春励志</div>
        <div v-if="flag==6">社科</div>
        <div v-if="flag==7">经营</div>
        <div v-if="flag==8">生活</div>
        <div v-if="flag==9">教育</div>
        <div v-if="flag==10">电子书</div>
      </div>
    </div>

    <div class="only_right">2</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nowindex: 0,
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      flag:0
    };
  },
  methods: {
    my(ev) {
      console.log(ev);
      this.flag=ev
    }
  },
  mounted() {
    getindex: (index) => {
      console.log(index);
      this.nowindex = index;
    };
  }
};
</script>

<style  scoped>
.only {
  width: 1200px;
  height: 582px;
  margin: 0 105.6px;
  border: 1px solid red;
  display: flex;
}

.only .only_left {
  width: 950px;
  height: 582px;
  border: 1px solid black;
}
.only .only_left .left {
  height: 47px;
  width: 950px;
  border-bottom: 1px solid #487a6f;
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
  border: 1px solid black;
  margin-left: 6px;
}
</style>
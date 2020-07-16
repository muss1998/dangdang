<template>
  <div class="only">
    <div class="only_left">
      <div class="left">
        <div class="headertitle">1</div>
        <div class="headerright">
         


1111




        </div>
      </div>
    </div>

    <div class="only_right">2</div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  
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
  height: 50px;
  width: 950pxpx;
  border: 1px solid red;
  display: flex;
}
.only .only_left .left .headertitle {
  width: 108px;
  height: 50px;
  border: 1px solid black;
}

.only .only_left .left .headerright {
  width: 788px;
  height: 35px;
  border: 1px solid blue;
  margin-top: 14px;
  margin-left: 48px;
}
.only .only_left .left .headerright .titlename {
  list-style: none;
  display: inline-block;
  line-height: 32px;
  color: #666;
  font-size: 14px;
  font-family: "Microsoft yahei";
  text-align: center;
  width: 84px;
  cursor: pointer;
}
.only .only_left .left .headerright li:hover {
  color: #4e8716;
  font-weight: bold;
  border: 2px solid #4e8716;
}

.only .only_right {
  height: 582px;
  width: 240px;
  border: 1px solid black;
  margin-left: 6px;
}
</style>
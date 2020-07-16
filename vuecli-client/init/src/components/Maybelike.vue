<template>
  <div class="maybelike">
    <div class="maylikeimg">顶部</div>
    <div class="bookleft">左边</div>
    <div class="authorright">右边</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style  scoped>
.maybelike {
  width: 1204px;
  height: 500px;
  border: 1px solid blue;
  margin-left: 108px;
  position: relative;
  
}
.maybelike .maylikeimg {
  height: 50px;
  width: 1204px;
  border: 1px solid blueviolet;
}

.maybelike .bookleft {
  width: 952px;
  height: 447px;
  border: 1px solid forestgreen;
}
.maybelike .authorright{
  width: 242px;
  height: 447px;
  border: 1px solid black;
  position:absolute;
  top: 50px;
  left: 960px;
}
</style>
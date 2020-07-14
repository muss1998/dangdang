<template>
  <div class="home">
   <el-page-header @back="goBack" content="购物车">
</el-page-header>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Car',
  components: {
    // HelloWorld
  },
  methods: {
      goBack() {
        console.log('go back');
        this.$router.push({path: "/my"})
      }
    }
}
</script>
<style lang="stylus" scoped>

</style>

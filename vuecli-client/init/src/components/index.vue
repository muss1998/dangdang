<template>
  <div >
    <Header></Header>

      <Searchbutton></Searchbutton>
  
    <Navtop></Navtop>
    <Sub></Sub>
    <Imgfloat></Imgfloat>
    <Storeone></Storeone>
    <Onlyapply></Onlyapply>
    <Threeimg></Threeimg>
    <Onlyapply></Onlyapply>
    <Hotauthor></Hotauthor>
     <Threeimg></Threeimg>
     <Maybelike></Maybelike>
     <Reader></Reader>
     <footers></footers>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
  components: {
    Header: () => import("@/components/Header"),
    Navtop: () => import("@/components/Navtop"),
    Sub: () => import("@/components/Sub"),
    Imgfloat: () => import("@/components/Imgfloat"),
    Storeone: () => import("@/components/Storeone"),
    Onlyapply: () => import("@/components/Onlyapply"),
    Threeimg: () => import("@/components/Threeimg"),
    Hotauthor: () => import("@/components/Hotauthor"),
    Maybelike: () => import("@/components/Maybelike"),
    Reader: () => import("@/components/Reader"),
    footers: () => import("@/components/footers"),
    Searchbutton: () => import("@/components/Searchbutton")
  }
};
</script>

<style  scoped>
* {
  margin: 0;
  padding: 0;
}
</style>



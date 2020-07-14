<template>
  <div id="app">
    <div id="nav">
      
      <Header><router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link></Header>
    </div>
    <div >
  <Searchbutton></Searchbutton>
    
    </div>
    
    <Navtop></Navtop>
    <Sub></Sub>
     <Imgfloat></Imgfloat>
    <Storeone></Storeone>
    <Onlyapply></Onlyapply>
  
<router-view></router-view>
  </div>
</template>


<script>
export default {
 data() {
    return {
      
    }
  },
   components:{
			 Header:()=>import("./components/Header"),
			 Navtop:()=>import("./components/Navtop"),
			 Sub:()=>import("./components/Sub"),
			 Imgfloat:()=>import("./components/Imgfloat"),
			 Storeone:()=>import("./components/Storeone"),
			 Onlyapply:()=>import("./components/Onlyapply"),
      Searchbutton:()=>import("./components/Searchbutton")
		 }
}
</script>

<style  scoped>
*{
  margin: 0;
  padding: 0;
}
</style>



<template>
    <div class="nav">
       <ul>
        <li ><div class="red"><a href="">全部商品分类</a></div></li>


        
        <li class="little"><a href="">图书</a></li>
        <li class="little"><a href="">电子书</a></li>
        <li class="little"><a href="">网络文学</a></li>
        <li class="little"><a href="">服装</a></li>
        <li class="little"><a href="">户外运动</a></li>
        <li class="little"><a href="">孕婴童</a></li>
        <li class="little"><a href="">家居</a></li>
        <li class="little"><a href="">当当优品</a></li>
        <li class="little"><a href="">食品</a></li>
        <li class="little"><a href="">Apple</a></li>
        <li class="little"><a href="">电器城</a></li>
</ul>
        <div class="bottomline"></div>
        
    </div>
</template>

<script>
export default {
    
}
</script>


<style  scoped>

.nav ul{
    padding-inline-start: 0px;
    margin-bottom: 0;
    margin-top: 0;
}
.nav ul li{
    list-style:none;
    color: #323232;
    display: inline-block;
    
}
.nav .red {
    width: 191px;
    height: 40px;
    background-color: red;
    font-size: weight;
    color: white;
    margin-left:115px ;
}
.bottomline{
    border-bottom: 2px solid red;
}
.little{
    padding-left: 40px;
    
    padding-bottom: 0px;
    margin-top: 10px;
    font:"Microsoft Yahei";
    font-weight: bold;
    font-size: 14px;
    font-weight: 40px;
    
}



a{
    text-decoration: none;

}
</style>
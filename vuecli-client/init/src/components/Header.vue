<template>
  <div class="topHeader">
    <el-container>
      <el-header >
        <el-row>
          <el-col :span="12" class="era fontalign">
            <div class="grid-content bg-purple">1</div>
          </el-col>
          <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple-light">2</div>
          </el-col>
          <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple">3</div>
          </el-col>
          <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple-light">4</div>
          </el-col>
           <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple-light">2</div>
          </el-col> <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple-light">2</div>
          </el-col> <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple-light">2</div>
          </el-col> <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple-light">2</div>
          </el-col> <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple-light">2</div>
          </el-col> <el-col :span="1" class="fontalign">
            <div class="grid-content bg-purple-light">2</div>
          </el-col>
        </el-row>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.topHeader {
  background-color: #f9f9f9;
  
  width: 100%;
  height: 34px;
}
.era{
    padding-left: 130px;
    align-content: center;
    padding-top: 5px;
}

.fontalign{
    padding-top: 5px;
    
}
.fontalign :hover{
    color: red;

}
</style>

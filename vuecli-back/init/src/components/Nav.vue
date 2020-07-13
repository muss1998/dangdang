<template>
  <div class="nav">
    <el-tabs :tab-position="tabPosition" style="height: 200px;" @tab-click="handleClick">
      <el-tab-pane label="查询">
        <div class="table">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="goodsname" label="书名" width="180"></el-table-column>
            <el-table-column prop="author" label="作者" width="180"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="pjnumber" label="评价数量"></el-table-column>
            <el-table-column prop="scnumber" label="收藏数量"></el-table-column>
            <el-table-column prop="keywords" label="描述"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="增加"></el-tab-pane>
      <el-tab-pane label="删除"></el-tab-pane>
      <el-tab-pane label="修改"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
export default {
  name: "Nav",
  components: {
    // HelloWorld
  },
  data() {
    return {
      tabPosition: "left",
      tableData: [
        {
          goodsname: "",
          author: "",
          price: "",
          keywords:"",
          scnumber:"",
          pjnumber:""
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    // /allbooks
    // "gid":1,"goodsname":"习近平谈治国理政","price":64,"imgsrc":"http://img3m7.ddimg.cn/56/32/28978247-1_l_4.jpg",
    //"keywords":" 习近平谈治国理政（第三卷）（中文平装）100册以上团购请联系团购电话4001066666转6","author":"习近平","pjnumber":4,"scnumber":12312}
    var url = "http://localhost:7001/allbooks"
    axios.get(url).then(res => {
      this.tableData = res.data;
    });
  }
};
</script>
<style scoped>
.nav {
  margin-top: 50px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
<template>
  <div class="nav">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="用户管理">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.goodsname }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.author }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.price }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.keywords }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.scnumber }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.pjnumber }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.gid }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="商品 ID" prop="gid"></el-table-column>
          <el-table-column label="商品名称" prop="goodsname"></el-table-column>
          <el-table-column label="描述" prop="author"></el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
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
          keywords: "",
          scnumber: "",
          pjnumber: "",
          imgsrc: "",
          gid: ""
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    }
  },
  mounted() {
    // "gid":1,"goodsname":"习近平谈治国理政","price":64,"imgsrc":"http://img3m7.ddimg.cn/56/32/28978247-1_l_4.jpg",
    //"keywords":" 习近平谈治国理政（第三卷）（中文平装）100册以上团购请联系团购电话4001066666转6","author":"习近平","pjnumber":4,"scnumber":12312}
    var url = "http://localhost:7001/allbooks";
    axios.get(url).then(res => {
      console.log(res.data);
      this.tableData = res.data;
    });
  }
};
</script>
<style scoped>
.nav {
  margin-top: 50px;
  height: 900px;
  background-color: darkgreen;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
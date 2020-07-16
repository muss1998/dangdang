<template>
  <div class="nav">
    <el-tabs :tab-position="tabPosition" style="min-height: 700px;">
      <el-tab-pane label="查看书籍">
        <div class="table">
          <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品ID">
                    <span>{{ props.row.gid }}</span>
                  </el-form-item>
                  <el-form-item label="书名">
                    <span>{{ props.row.goodsname }}</span>
                  </el-form-item>
                  <el-form-item label="评价量">
                    <span>{{ props.row.pjnumber }}</span>
                  </el-form-item>

                  <el-form-item label="作者">
                    <span>{{ props.row.author }}</span>
                  </el-form-item>

                  <el-form-item label="收藏量">
                    <span>{{ props.row.scnumber }}</span>
                  </el-form-item>
                  <el-form-item label="价格">
                    <span>{{ props.row.price }}</span>
                  </el-form-item>
                  <el-form-item label="描述">
                    <span>{{ props.row.keywords }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column label="ID" prop="gid"></el-table-column>
            <el-table-column label="书名" prop="goodsname"></el-table-column>
            <el-table-column label="作者" prop="author"></el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="this.countID"
            :page-size="5"
            @current-change="handleCurrentChange"
          style="margin-top:30px"></el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="添加书籍">
        <Add></Add>
      </el-tab-pane>
      <el-tab-pane label="操作书籍">
        <Edit></Edit>
      </el-tab-pane>
        <el-tab-pane label="管理用户">
        <Info></Info>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
import Add from "@/views/Add.vue";
import Edit from "@/views/Edit.vue";
import Info from "@/views/Info.vue";

import axios from "axios";
export default {
  name: "Nav",
  components: {
    Add,
    Edit,
    Info
  },
  data() {
    return {
      countID:0,
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
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      var url = `http://localhost:7001/allbooks?pageNum=5&num=${val}`;
      axios.get(url).then(res => {
        this.tableData = res.data.books;
      });
    }
  },
  mounted() {
    var url = "http://localhost:7001/allbooks?pageNum=5&num=1";
    axios.get(url).then(res => {
      this.tableData = res.data.books;
    });
    var url = "http://localhost:7001/getallbooks"; //无条件查询所有商品
    axios.get(url).then((res)=>{
       this.countID = res.data.countID;
    })
  }
};
</script>
<style scoped>
.nav {
  margin-top: 10px;
  height: 900px;
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
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
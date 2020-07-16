<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="用户ID" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.uid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户名" width="360">
        <template slot-scope="scope">{{scope.row.username}}</template>
      </el-table-column>
      <el-table-column label="是否为黑名单用户" width="360">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.blacklist }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">更改状态</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="this.countID"
      :page-size="5"
      @current-change="handleCurrentChange"
      style="margin-top:14px"
    ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      countID: 0,
      tableData: [{ uid: "", username: "", blacklist: "" }],
      blackdata: 0
    };
  },
  methods: {
    handleDelete(index, row) {
      if (row.blacklist == "是") {
        this.$message({
          showClose: true,
          message: "该用户已经不再是黑名单用户~"
        });
        this.blackdata = "否";
      } else {
        this.$message({
          showClose: true,
          message: "该操作将用户设置成黑名单了哦~",
          type: "warning"
        });
        this.blackdata = "是";
      }
      var url = "http://localhost:7001/changeusers";
      axios.post(url, { blackdata: this.blackdata, row1: row }).then(res => {
        var url = "http://localhost:7001/getallusers";
        axios.get(url).then(res => {
          this.tableData = res.data.users;
        });
      });
    },
    handleCurrentChange(val) {
      var url = `http://localhost:7001/allusers?pageNum=5&num=${val}`;
      axios.get(url).then(res => {
        this.tableData = res.data.users;
      });
    }
  },
  mounted() {
    //无条件查询所有用户表
    axios.get("http://localhost:7001/getallusers").then(res => {
      this.countID = res.data.countID;
    });
    axios.get("http://localhost:7001/allusers?pageNum=5&num=1").then(res => {
      this.tableData = res.data.users;
    });
  }
};
</script>
<template>
  <div class="edit">
    <Search @search="searchEvent"></Search>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="书名" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p v-show="!flag">描述: {{ scope.row.keywords }}</p>
              <p v-show="flag">
                描述:
                <el-input type="text" v-model="scope.row.keywords"></el-input>
              </p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium" v-show="!flag">{{ scope.row.goodsname }}</el-tag>
                <el-tag size="medium" v-show="flag">
                  <el-input type="text" name id v-model="scope.row.goodsname"></el-input>
                </el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="作者" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-show="!flag">{{ scope.row.author }}</span>
            <el-input type="text" v-model="scope.row.author" v-show="flag"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-show="!flag">{{ scope.row.price }}</span>
            <el-input type="text" v-model="scope.row.price" v-show="flag"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="收藏数量" width="120">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-show="!flag">{{ scope.row.scnumber }}</span>
            <el-input type="text" v-model="scope.row.scnumber" v-show="flag"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="评论数量" width="120">
          <template slot-scope="scope">
            <span style="margin-left: 10px" v-show="!flag">{{ scope.row.pjnumber }}</span>
            <el-input type="text" v-model="scope.row.pjnumber" v-show="flag"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="图片" width="120px">
          <template slot-scope="scope">
            <img :src="scope.row.imgsrc" width="50px" height="50px" v-show="!flag" />
            <el-input type="text" v-model="scope.row.imgsrc" v-show="flag"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-show="!flag">编辑</el-button>
            <el-button size="mini" @click="toSava(scope.$index, scope.row)" v-show="flag">保存</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
  </div>
</template>

<script>
import axios from "axios";
import Search from "@/components/Search.vue";
export default {
  components: { Search },
  inject: ["reload"], //注入App里的reload方法
  data() {
    return {
      flag: false,
      countID: 0,
      tableData: [
        {
          goodsname: "",
          scnumber: "",
          pjnumber: "",
          keywords: "",
          price: "",
          imgsrc: "",
          author: ""
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      this.flag = true;
    },
    toSava(index, row) {
      var url = "http://localhost:7001/changebooks";
      axios.post(url, row).then(res => {
        this.flag = false;
      });
    },
    handleDelete(index, row) {
      var url = `http://localhost:7001/delbooks?gid=${row.gid}`;
      axios.get(url).then(res => {
        if (res.data.code === 1) {
          this.$message({
            message: "报告，删除成功~",
            type: "success"
          });
          this.reload();
        }
      });
    },
    handleCurrentChange(val) {
      var url = `http://localhost:7001/allbooks?pageNum=5&num=${val}`;
      axios.get(url).then(res => {
        this.tableData = res.data.books;
      });
    },
    searchEvent(e){
     console.log(e);
     this.tableData = e;
    }
  },
  mounted() {
    axios.get("http://localhost:7001/allbooks?pageNum=5&num=1").then(res => {
      this.tableData = res.data.books;
    });
    axios.get("http://localhost:7001/getallbooks").then(res => {
      this.countID = res.data.countID;
    });
  }
};
</script>
<style scoped>
.addform {
  width: 600px;
  padding: 40px;
  box-shadow: 3px 3px 30px #888888;
  border-radius: 6px;
  position: absolute;
  top: 30px;
  left: 180px;
}
.addform .el-input__inner {
  width: 80% !important;
}
</style>
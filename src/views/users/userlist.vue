<template>
  <div class="userlist">
    <div class="userlist-t">
      <div class="userlist-t-l">
        <el-col  class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="tableData" @submit.native.prevent>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" placeholder="用户名/手机号"></el-input>
            </el-form-item>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" placeholder="代理编号"></el-input>
            </el-form-item>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" placeholder="关联用户"></el-input>
            </el-form-item>
            <el-form-item class="bn">
              <div class="block">
                <el-date-picker v-model="value1" type="datetime" placeholder="注册时间"></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item class="bt">
              <el-button type="primary">搜素</el-button>
              <!-- @click="handleAdd" -->
            </el-form-item>
          </el-form>
        </el-col>
      </div>
      <div class="userlist-t-r btn">
        <el-button
          style="margin:0 0 20px 20px;"
          type="primary"
          icon="document"
          @click="handleDownload"
        >导出表格</el-button>
        <el-button
          style="margin:0 0 20px 20px;"
          type="primary"
          icon="document"
          @click="handleDownload"
        >导出杠杆倍律</el-button>
        <!-- <upload-excel>导入杠杆倍率</upload-excel> -->
      </div>
    </div>
    <div class="userlist-b">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="真实姓名" prop="date"></el-table-column>
        <el-table-column label="手机号" prop="name"></el-table-column>
        <el-table-column label="可用信用金" prop="name"></el-table-column>
        <el-table-column label="杠杆倍率" prop="name"></el-table-column>
        <el-table-column label="注册时间" prop="name"></el-table-column>
        <el-table-column label="注销时间" prop="name"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" width="200">
            <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改信息</el-button> -->
             <router-link :to="'./edituserlist/'+scope.row.id">
            <el-button type="primary" size="small">
              修改信息
            </el-button>
          </router-link>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">银行卡</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
// import UploadExcel from "./upload-excel"
export default {
  // components:{
  //   UploadExcel
  // },
  data() {
    return {
      value1: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: ""
    };
  },
  methods: {
     handleEdit(index, row) {
       
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    handleDownload() {
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
        const filterVal = [
          "id",
          "title",
          "author",
          "pageviews",
          "display_time"
        ];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth
        });
        this.downloadLoading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.userlist {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .userlist-t {
    height: 40px;
    background-color: rgb(250, 232, 232);
    .userlist-t-l {
      float: left;
      margin-left: 5px;
      .toolbar{
         padding-left: 15px;
      }
    }
    .userlist-t-r {
      float: right;
      margin-top: 5px;
      margin-right: 5px;
      .el-button{
        padding: 8px 15px;
        border:0;
      }
    }
    
     .bt{
      .el-button{
        padding: 8px 15px;
        border:0;
      }
    }
     .bn /deep/.el-input__inner{
          height:30px;
        }
  }
  .userlist-t::before{
      content:'';
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
}
</style>

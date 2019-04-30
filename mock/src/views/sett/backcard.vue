<template>
  <div class="backcard">
   <div class="backcard-t">
     <div class="backcard-t-l"> <span></span>银行卡列表</div>
     <div class="backcard-t-r">
         <el-form>
          <el-form-item class="btn">
            <router-link to="./addbackcard"><el-button type="primary">新增银行卡</el-button></router-link>
          </el-form-item>
        </el-form>
     </div>
   </div>
   <div class="backcard-b">
      <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="编号" prop="date"></el-table-column>
      <el-table-column label="持卡人姓名" prop="name"></el-table-column>
      <el-table-column label="开户行" prop="name"></el-table-column>
      <el-table-column label="卡号" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope" width="200">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style lang="scss" scoped>
.backcard {
  width: 100%;
  padding: 15px 15px 0;
   background-color: #fff;
  .backcard-t {
    height: 40px;
    line-height: 40px;
    border: 1px solid rgb(245, 238, 238);
    padding-right: 10px;
    //  padding-left: 5px;
    box-sizing: border-box;
    background-color: rgb(212, 204, 204);

    .backcard-t-l {
      float: left;
      position: relative;
      span {
        display: inline-block;
        width: 15px;
      }
    }
    .backcard-t-l::before {
      content: "";
      position: absolute;
      height: 38px;
      width: 5px;
      background-color: red;
    }
    .backcard-t-r {
      float: right;
      .btn{
        border:0;
        .el-button {
        padding: 8px 15px;
        border: 0;
      }
      }
      
    }
  }
}
</style>

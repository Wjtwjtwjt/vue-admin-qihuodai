<template>
  <div class="agencylist">
    <div class="agencylist-t">
      <div class="agencylist-t-l">
       <span></span>代理列表
      </div>
      <div class="agencylist-t-r">
         <el-col  class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="tableData" @submit.native.prevent>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" ></el-input>
            </el-form-item>
            <el-form-item class="bt">
              <el-button type="primary">搜素</el-button>
              <!-- @click="handleAdd" -->
            </el-form-item>
          </el-form>
        </el-col>
      </div>
    </div>
    <div class="agencylist-b">
       <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="编号" prop="date"></el-table-column>
      <el-table-column label="账户名" prop="name"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="代理级别" prop="name"></el-table-column>
      <el-table-column label="银行信息" prop="name"></el-table-column>
      <el-table-column label="编码" prop="name"></el-table-column>
      <el-table-column label="状态" prop="name"></el-table-column>
      <el-table-column label="类型" prop="name"></el-table-column>
      <el-table-column label="上级编码" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope" width="100">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
.agencylist{
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .agencylist-t{
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    .agencylist-t-l{
      float: left;
      span{
        display: inline-block;
        width: 15px;
      }
    }
    .agencylist-t-l::before{
      content:'';
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
    .agencylist-t-r{
      float:right;
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
}
</style>

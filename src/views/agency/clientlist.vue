<template>
  <div class="clientlist">
   <div class="clientlist-t">
     <div class="clientlist-t-l">
       <span></span>客户列表
     </div>
     <div class="clientlist-t-r">
        <el-col  class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="tableData" @submit.native.prevent>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" placeholder="用户名/手机号"></el-input>
            </el-form-item>
            <el-form-item class="bt">
              <el-button type="primary">搜素</el-button>
              <!-- @click="handleAdd" -->
            </el-form-item>
          </el-form>
        </el-col>
     </div>
   </div>
   <div class="clientlist-b">
      <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="编号" prop="date"></el-table-column>
      <el-table-column label="用户名" prop="name"></el-table-column>
      <el-table-column label="手机号" prop="name"></el-table-column>
      <el-table-column label="所属代理" prop="name"></el-table-column>
      <el-table-column label="可用信用金" prop="name"></el-table-column>
      <el-table-column label="注册时间" prop="name"></el-table-column>
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
.clientlist{
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .clientlist-t{
    width: 100%;
    height: 40px;
    line-height: 40px;
     background-color: rgb(250, 226, 226);
    .clientlist-t-l{
      float: left;
      span{
        display: inline-block;
        width: 15px;
      }
    }
    .clientlist-t-l::before{
      content:"";
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
    .clientlist-t-r{
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

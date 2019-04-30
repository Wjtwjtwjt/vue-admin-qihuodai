<template>
  <div class="withdraw">
    <div class="withdraw-t">
      <span></span>出金审核
    </div>
    <div class="withdraw-">
      <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="交易编号" prop="date"></el-table-column>
      <el-table-column label="申请人" prop="name"></el-table-column>
      <el-table-column label="出金金额" prop="name"></el-table-column>
      <el-table-column label="手续费" prop="name"></el-table-column>
      <el-table-column label="出金后账户余额" prop="name"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="卡号" prop="name"></el-table-column>
      <el-table-column label="申请时间" prop="name"></el-table-column>
      <el-table-column label="操作" prop="name"></el-table-column>
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
.withdraw {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .withdraw-t {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    span {
      display: inline-block;
      width: 15px;
    }
  }
  .withdraw-t::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
  .bt {
    .el-button {
      padding: 8px 15px;
      border: 0;
    }
  }
  .bn /deep/.el-input__inner {
    height: 30px;
  }
}
</style>
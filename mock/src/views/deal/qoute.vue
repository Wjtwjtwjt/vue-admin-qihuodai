<template>
  <div class="qoute">
   <div class="qoute-t">
    <span></span>手动平仓报价审核列表
   </div>
   <div class="qoute-b">
       <!-- :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" -->
    <el-table style="width: 100%">
      <el-table-column label="订单编号" prop="date"></el-table-column>
      <el-table-column label="申请人" prop="name"></el-table-column>
      <el-table-column label="所属上级" prop="name"></el-table-column>
      <el-table-column label="数量（手）" prop="name"></el-table-column>
      <el-table-column label="买/卖" prop="name"></el-table-column>
      <el-table-column label="下单时间" prop="name"></el-table-column>
      <el-table-column label="成交价" prop="name"></el-table-column>
      <el-table-column label="总市值" prop="name"></el-table-column>
      <el-table-column label="建仓手续费" prop="name"></el-table-column>
      <el-table-column label="平仓手续费" prop="name"></el-table-column>
      <el-table-column label="总手续费" prop="name"></el-table-column>
      <el-table-column label="结算价" prop="name"></el-table-column>
      <el-table-column label="结算盈亏" prop="name"></el-table-column>
      <el-table-column label="实际盈亏" prop="name"></el-table-column>
      <el-table-column label="止盈价" prop="name"></el-table-column>
      <el-table-column label="止损价" prop="name"></el-table-column>
      <el-table-column label="申请平仓时间" prop="name"></el-table-column>
      <el-table-column label="操作">
        <!-- <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        </template>-->
      </el-table-column>
    </el-table>
   </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.qoute{
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .qoute-t{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    span{
      display: inline-block;
      width: 15px;
    }
  }
  .qoute-t::before{
    content:'';
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
}
</style>

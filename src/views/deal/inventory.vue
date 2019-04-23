<template>
    <div class="inventory">
        <!-- :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" -->
    <el-table
    style="width: 100%">
    <el-table-column
      label="订单编号"																													
      prop="date">						
    </el-table-column>													
    <el-table-column
      label="申请人"
      prop="name">
    </el-table-column>
     <el-table-column
      label="所属上级"
      prop="name">
    </el-table-column>
    <el-table-column
      label="数量（手）"
      prop="name">
    </el-table-column>
    <el-table-column
      label="买/卖"
      prop="name">
    </el-table-column>
    <el-table-column
      label="下单时间"
      prop="name">
    </el-table-column>
    <el-table-column
      label="成交价"
      prop="name">
    </el-table-column>
    <el-table-column
      label="总市值"
      prop="name">
    </el-table-column>
    <el-table-column
      label="建仓手续费"
      prop="name">
    </el-table-column>
    <el-table-column
      label="现价"
      prop="name">
    </el-table-column>
    <el-table-column
      label="浮动盈亏"
      prop="name">		
    </el-table-column>
     <el-table-column
      label="实际盈亏"
      prop="name">
    </el-table-column>
     <el-table-column
      label="止盈价"
      prop="name">
    </el-table-column>
     <el-table-column
      label="止损价"
      prop="name">
    </el-table-column>
     <el-table-column
      label="状态"
      prop="name">
    </el-table-column>
    <el-table-column
    label="操作"
    >
      <!-- <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
      </template> -->
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
   
}
</script>
<style>

</style>
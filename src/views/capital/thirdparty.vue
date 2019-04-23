<template>
    <div class="thirdparty">
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="订单号"																										
      prop="date">																		
    </el-table-column>
    <el-table-column
      label="商户订单号"
      prop="name">
    </el-table-column>
     <el-table-column
      label="充值用户/帐号"
      prop="name">
    </el-table-column>
    <el-table-column
      label="充值金额"
      prop="name">
    </el-table-column>
    <el-table-column
      label="手续费"
      prop="name">
    </el-table-column>
     <el-table-column
      label="充值后金额"
      prop="name">
    </el-table-column>
     <el-table-column
      label="充值时间"
      prop="name">
    </el-table-column>
     <el-table-column
      label="状态"
      prop="name">
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
     data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
}
</script>
<style>

</style>
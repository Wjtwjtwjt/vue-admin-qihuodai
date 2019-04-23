<template>
    <div class="feedback">
    <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="用户名"																			
      prop="date">						
    </el-table-column>
    <el-table-column
      label="手机号"
      prop="name">
    </el-table-column>
     <el-table-column
      label="反馈内容"
      prop="name">
    </el-table-column>
    <el-table-column
      label="反馈图片"
      prop="name">
    </el-table-column>
    <el-table-column
      label="反馈时间"
      prop="name">
    </el-table-column>
    <el-table-column
      label="总市值"
      prop="name">
    </el-table-column>
    <el-table-column
      label="占用信用金"
      prop="name">
    </el-table-column>
    <el-table-column
      label="股数"
      prop="name">
    </el-table-column>
    <el-table-column
    label="操作"
    width="200"
    >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
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
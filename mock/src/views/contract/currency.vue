<template>
  <div class="currency">
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="编号" prop="date"></el-table-column>
      <el-table-column label="币种名称" prop="name"></el-table-column>
      <el-table-column label="对人民币汇率" prop="name"></el-table-column>
      <el-table-column label="更新时间" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope" width="200">
          <el-button type="primary" size="mini">
            <router-link to="./addcurrency">编辑</router-link>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
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
<style>
</style>
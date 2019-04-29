<template>
  <div class="operations">
    <div class="operation-t">
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" @submit.native.prevent>
          <el-form-item>
            <el-input class="bn" v-model="tableData.name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" v-on:click="getUsers">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-select class="bn" v-model="tableData.id" placeholder="选择类型">
              <el-option
                v-for="item in tableData"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" v-on:click="getUsers">筛选</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
    <div class="operation-b">
      <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="index" width="100" sortable></el-table-column>
        <el-table-column property="date" label="操作时间" width="200" sortable></el-table-column>
        <el-table-column property="name" label="IP" width="220" sortable></el-table-column>
        <el-table-column property="address" label="操作类型" sortable></el-table-column>
        <el-table-column property="address" label="详情" sortable></el-table-column>
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
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    getUsers: function() {
      console.log(1111);
      let para = {
        name: this.tableData.name
      };
    }
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
.operations {
  width: 100%;
  background-color: #fff;
  padding: 15px 15px 0;
  .operation-t {
    height: 40px;
    background-color: rgb(230, 223, 223);
    .toolbar {
      padding-left: 15px;
      .btn {
        .el-button {
          border: 0;
          padding: 8px 15px;
        }
      }
      .bn /deep/.el-input__inner {
        height: 30px;
      }
    }
  }
  .operation-t::before{
    content:'';
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
}
</style>

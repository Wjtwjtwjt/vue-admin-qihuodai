<template>
  <div class="protocol">
    <div class="protocol-t">
      <div class="protocol-t-l">
        <span></span>协议类型列表
      </div>
      <div class="protocol-t-r">
        <el-form>
          <el-form-item class="btn">
            <el-button type="primary" @click="handleAdd">添加用户</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="protocol-b">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号"  type="index"></el-table-column>
        <el-table-column label="类型"  prop="name"></el-table-column>
        <el-table-column label="标题"  prop="title"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
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
          address: "上海市普陀区金沙江路 1518 弄",
          title: "（股票）金顾策略交易居间服务协议"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          title: "交易协议"
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
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
.protocol {
  width: 100%;
  padding: 15px 15px 0;
   background-color: #fff;
  .protocol-t {
    height: 40px;
    line-height: 40px;
    border: 1px solid rgb(245, 238, 238);
    padding-right: 10px;
    //  padding-left: 5px;
    box-sizing: border-box;
    background-color: rgb(212, 204, 204);

    .protocol-t-l {
      float: left;
      position: relative;
      span {
        display: inline-block;
        width: 15px;
      }
    }
    .protocol-t-l::before {
      content: "";
      position: absolute;
      height: 38px;
      width: 5px;
      background-color: red;
    }
    .protocol-t-r {
      float: right;
      .el-button {
        height: 36px;
        border: 0;
      }
    }
  }
}
</style>
<template>
  <div class="information">
    <div class="information-t">
      <div class="information-t-l">
        <span></span>新闻资讯列表
      </div>
      <div class="information-t-r">
         <el-form>
          <el-form-item class="btn">
            <el-button type="primary">添加文章</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="information-b">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="发布时间" prop="date"></el-table-column>
        <el-table-column label="标题" prop="name"></el-table-column>
        <el-table-column label="发布人" prop="name"></el-table-column>
        <el-table-column label="状态" prop="name"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" width="200">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
.information {
  width: 100%;
  padding: 8px 15px;
   background-color: #fff;
  .information-t {
    height: 40px;
    line-height: 40px;
    border: 1px solid rgb(245, 238, 238);
    padding-right: 10px;
    //  padding-left: 5px;
    box-sizing: border-box;
    background-color: rgb(212, 204, 204);

    .information-t-l {
      float: left;
      position: relative;
      span {
        display: inline-block;
        width: 15px;
      }
    }
    .information-t-l::before {
      content: "";
      position: absolute;
      height: 38px;
      width: 5px;
      background-color: red;
    }
    .information-t-r {
      float: right;
      .btn{
        border:0;
        .el-button {
        padding: 8px 15px;
        border: 0;
      }
      }
      
    }
  }
}
</style>

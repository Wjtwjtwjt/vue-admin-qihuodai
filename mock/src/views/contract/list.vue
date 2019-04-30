<template>
  <div class="list">
    <div class="list-t">
      <!-- 工具条 -->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" @submit.native.prevent>
          <el-form-item>
            <el-input class="bn" v-model="tableData.name" placeholder="合约名称/合约代码"></el-input>
          </el-form-item>
          <el-form-item class="bt">
            <el-button type="primary">搜索</el-button>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary"><router-link to="./addlist">添加合约</router-link> </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
    <div class="list-b">
      <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="编号" prop="date" width="150"></el-table-column>
      <el-table-column label="合约名称" prop="name"></el-table-column>
      <el-table-column label="合约代码" prop="name"></el-table-column>
      <el-table-column label="前缀" prop="name"></el-table-column>
      <el-table-column label="所属交易所" prop="name"></el-table-column>
      <el-table-column label="操作" width="300">
        <template slot-scope="scope">
          <el-button size="mini"><router-link to="./editlist">编辑</router-link> </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">采集k线图</el-button>
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
  },
  methods:{
    handleAdd() {
     this.$router.path("/addlist")
      }
    },
 
};
</script>
<style lang="scss" scoped="" type="text/css">
.list{
  width: 100%;
  padding: 8px 15px;
  background-color: #fff; 
  .list-t{
    height: 40px;
    box-sizing: border-box;
    background-color: rgb(245, 239, 239);
    .toolbar{
       padding-left: 15px;
    }
    .bt{
      .el-button{
        padding: 8px 15px;
        border:0;
      }
    }
    .btn{
      float: right;
      .el-button{
        padding: 8px 15px;
        border:0;
      }
    }
     .bn /deep/.el-input__inner{
          height:30px;
        }
  }
  .list-t::before{
    content:'';
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
}
</style>
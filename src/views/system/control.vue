<template>
  <div class="controls">
    <div class="control">
      <div class="control-t">
        <span></span>用户组列表
        <div class="control-t-b">
          <el-form>
             <el-form-item class="btn">
            <el-button type="primary" @click="handleAdd">添加用户</el-button>
          </el-form-item>
        </el-form>
        </div>
      </div>
       <div class="control-b">  <!--   @current-change="handleCurrentChange" -->
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
         
          style="width: 100%"
        >
          <el-table-column type="index" ></el-table-column>
          <el-table-column property="date" label="名称" ></el-table-column>
          <el-table-column property="name" label="状态" ></el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
               <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">权限</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
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
        }]
      }
    },
};
</script>
<style lang="scss" scoped="" type="text/css">
.controls {
    width: 100%;
   .control-t {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      background-color: rgb(238, 231, 231);
      position: relative;
      span {
        display: inline-block;
       width: 15px;
      }
      .control-t-b{
      position: absolute;
      right: 10px;
    }
    }
    .control-t::before{
      content:"";
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
    
}
</style>
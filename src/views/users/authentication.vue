<template>
  <div class="authentication">
    <div class="authentication-t">
      <span></span>账户列表
    </div>
    <div class="authentication-m">
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="tableData" @submit.native.prevent>
          <el-form-item class="bn">
            <el-input v-model="tableData.name" placeholder="用户名/手机号"></el-input>
          </el-form-item>
          <el-form-item class="bn">
            <el-input v-model="tableData.name" placeholder="认证时间"></el-input>
          </el-form-item>
          <el-form-item class="usergroup bn">
            实名状态：
            <el-select placeholder="全部">
              <!-- v-model="tableData.id"  -->
              <el-option></el-option>
              <!-- v-for="item in tableData"
                    :key="item.id"
                    :label="item.label"
              :value="item.id"-->
            </el-select>
          </el-form-item>
          <el-form-item class="bt">
            <el-button type="primary">搜素</el-button>
            <!-- @click="handleAdd" -->
          </el-form-item>
        </el-form>
      </el-col>
    </div>
    <div class="authentication-b">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="编号" prop="date"></el-table-column>
        <el-table-column label="真实姓名" prop="name"></el-table-column>
        <el-table-column label="身份证号" prop="name"></el-table-column>
        <el-table-column label="认证时间" prop="name"></el-table-column>
        <el-table-column label="状态" prop="name"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">修改</el-button>
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
.authentication {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .authentication-t {
    width: 100%;
    background-color: rgb(255, 240, 240);
    height: 30px;
    line-height: 30px;
    position: relative;
    span {
      display: inline-block;
      width: 15px;
    }
  }
  .authentication-m {
    width: 100%;
    height: 40px;
    margin-top: 10px;
    background-color: rgb(255, 240, 240);
    .toolbar{
       padding-left: 15px;
    }
    .bt {
      .el-button {
        padding: 8px 15px;
        border: 0;
      }
    }
    .bn /deep/.el-input__inner {
      height: 30px;
    }
  }
  .authentication-t::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 30px;
    background-color: red;
  }
  .authentication-m::before{
     content: "";
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
}
</style>

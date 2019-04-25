<template>
  <div class="administrator">
    <div class="administrator-t">
      <!-- 工具条 -->
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" @submit.native.prevent>
          <el-form-item>
            <el-input class="bn" v-model="tableData.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item class="bt">
            <el-button type="primary" v-on:click="getUsers">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-select class="bn" v-model="tableData.id" placeholder="用户组">
            <el-option
              v-for="item in tableData"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            ></el-option>
          </el-select>
          </el-form-item>
          <el-form-item class="bt">
            <el-button type="primary" v-on:click="getUsers">筛选</el-button>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="handleAdd">添加用户</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
    <div class="administrator-b">
      <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column label="编号"></el-table-column>
        <el-table-column property="date" label="用户名" ></el-table-column>
        <el-table-column property="name" label="用户组" ></el-table-column>
        <el-table-column property="address" label="状态"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 显示编辑界面 -->
    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <el-form :model="editForm" label-width="100px" ref="editForm">
        <el-form-item label="用户组" prop="name">
          <el-select v-model="tableData.id" placeholder="请选择">
            <el-option
              v-for="item in tableData"
              :key="item.id"
              :label="item.label"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名/登录名">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <span></span>
        <el-form-item label="昵称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="editForm.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input type="password" v-model="editForm.password"></el-input>
        </el-form-item>
        <el-form-item label="用户状态">
          <el-radio v-model="editForm.radio" label="1">正常</el-radio>
           <el-radio v-model="editForm.radio" label="2">禁用</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible=false">取消</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">添加</el-button>
        <el-button v-else type="primary" @click="updateData">修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio:1,
      tableData: [
        { id:1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          label: "超级管理员"
        },
        {id:2,
          date: "2016-05-04",
          name: "王小",
          address: "上海市普陀区金沙江路 1517 弄",
          label:"风控"
        },
        {
          id:3,
          date: "2016-05-01",
          name: "小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          label:"客服"
        },
        {
          id:4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          label:"财务"
        }
      ],
      dialogStatus: "",
      textMap: {
        update: "编辑",
        create: "添加"
      },
      dialogFormVisible: false,
      currentRow: null,
      // 编辑界面的数据
      editForm: {
        id: "0",
        name: "",
        date: "",
        addr: "",
        radio:1
      },
      addFormVisible: false, // 新增界面是否显示
    };
  },
  methods: {
    // 性别显示转换
    formatSex: function(row, column) {
      return row.sex === 1 ? "男" : row.sex === 0 ? "女" : "未知";
    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers();
    },
    // 获取用户列表
    getUsers() {
      const para = {
        page: this.page,
        name: this.tableData.name
      };
      // getUserListPage(para).then(res => {
      //   this.total = res.data.total;
      //   this.users = res.data.users;
      // });
    },
    // 删除
    handleDel(index, row) {
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning"
      })
        .then(() => {
          const para = { id: row.id };
          removeUser(para).then(res => {
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.getUsers();
          });
        })
        .catch(() => {});
    },
    // 显示编辑界面
    handleEdit(index, row) {
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.editForm = Object.assign({}, row);
    },
    // 显示新增界面
    handleAdd() {
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.editForm = {
        id: "0",
        name: "",
        sex: 1,
        age: 0,
        birth: "",
        addr: "",
        radio:1
      };
    },
    // 编辑
    updateData() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {})
            .then(() => {
              const para = Object.assign({}, this.editForm);
              para.birth =
                !para.birth || para.birth === ""
                  ? ""
                  : util.formatDate.format(new Date(para.birth), "yyyy-MM-dd");
              editUser(para).then(res => {
                this.$message({
                  message: "提交成功",
                  type: "success"
                });
                this.$refs["editForm"].resetFields();
                this.dialogFormVisible = false;
                this.getUsers();
              });
            })
            .catch(e => {
              // 打印一下错误
              console.log(e);
            });
        }
      });
    },
    // 新增
    createData: function() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$confirm("确认提交吗？", "提示", {})
            .then(() => {
              this.editForm.id = parseInt(Math.random() * 100).toString(); // mock a id
              const para = Object.assign({}, this.editForm);
              console.log(para);

              para.birth =
                !para.birth || para.birth === ""
                  ? ""
                  : util.formatDate.format(new Date(para.birth), "yyyy-MM-dd");
              addUser(para).then(res => {
                this.$message({
                  message: "提交成功",
                  type: "success"
                });
                this.$refs["editForm"].resetFields();
                this.dialogFormVisible = false;
                this.getUsers();
              });
            })
            .catch(e => {
              // 打印一下错误
              console.log(e);
            });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
.administrator{
  width: 100%;
  background-color: #fff;
  padding: 15px 15px 0;
  .administrator-t{
    height: 60px;
    line-height: 60px;
    background-color: rgb(230, 223, 223);
    position: relative;
    .toolbar{
      margin-left: 15px;
      margin-top: 12px;
      .el-button--primary{
      border:0;
      }
      .bn /deep/.el-input__inner{
          height:30px;
        }
      
      .btn{
        position: absolute;
        right: 10px;
        .el-button{
          padding:8px 15px;
        }
      }
      .bt{
        .el-button{
          padding:8px 15px;
        }
      }
      
    }
  }
  .administrator-t::before{
    content:"";
    position: absolute;
    width: 5px;
    height: 60px;
    background-color: red;
  }
}
</style>
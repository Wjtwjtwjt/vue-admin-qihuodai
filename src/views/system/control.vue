<template>
  <div class="controls">
    <div class="control">
      <div class="control-t">
        <span></span>用户组列表
        <div class="control-t-r">
          <el-form>
            <el-form-item class="btn">
              <el-button type="primary" @click="handleAdd">添加用户</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="control-b">
        <!--   @current-change="handleCurrentChange" -->
        <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
          <el-table-column type="index"></el-table-column>
          <el-table-column property="date" label="名称"></el-table-column>
          <el-table-column property="name" label="状态"></el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">权限</el-button>
              <el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
     <!-- 显示编辑界面 -->
    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <el-form :model="editForm" label-width="100px" ref="editForm">
        <el-form-item label="用户名称">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="用户组状态">
          <el-radio v-model="editForm.radio" label="1">正常</el-radio>
           <el-radio v-model="editForm.radio" label="2">禁用</el-radio>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible=false">重置</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">保存</el-button>
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
        {id:1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {id:2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {id:3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {id:4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
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
  methods:{
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
.controls {
  width: 100%;
  padding: 15px 15px 0;
  background-color: #fff;
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
    .control-t-r {
      float: right;
      margin-right: 15px;
      .btn{
        .el-button{
          border:0;
          padding: 8px 15px;
        }
      }
    }
  }
  .control-t::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
}
</style>
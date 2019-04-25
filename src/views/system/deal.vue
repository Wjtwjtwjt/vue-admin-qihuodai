<template>
<div class="deal">
<div class="deal-t">
<div class="deal-t-l">
  <span></span>协议类型列表
</div>
<div class="deal-t-r">
  <el-form>
    <el-form-item class="btn">
            <el-button type="primary" @click="handleAdd">添加用户</el-button>
    </el-form-item>
  </el-form>
</div>
</div>
<div class="deali-b">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      label="编号"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button type="text"  @click="handleEdit(scope.$index, scope.row)">修改</el-button>
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
        
        <el-form-item label="名称">
          <el-input v-model="editForm.name"></el-input>
        </el-form-item>
        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="dialogFormVisible=false">重置</el-button>
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          tag: '公司'
        }],
      dialogStatus: "",
      textMap: {
        update: "编辑",
        create: "添加"
      },
      dialogFormVisible: false,
         // 编辑界面的数据
      editForm: {
        id: "0",
        name: "",
        date: "",
        addr: "",
        radio:1
      },
      addFormVisible: false, // 新增界面是否显示
      }
    },
    methods: {
      indexMethod(index) {
        return index * 2;
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
 .deal{
   width: 100%;
  padding: 15px 15px 0;
  background-color: #fff;
   .deal-t{
     height: 40px;
     line-height: 40px;
     border: 1px solid rgb(245, 238, 238);
     padding-right:10px; 
    //  padding-left: 5px;
     box-sizing: border-box;
     background-color: rgb(212, 204, 204);
     
     .deal-t-l{
       float: left;
       position: relative;
       span{
         display: inline-block;
         width: 15px;
       }
     }
     .deal-t-l::before{
       content:'';
       position: absolute;
       height: 38px;
       width: 5px;
      background-color: red;
      
     }
     .deal-t-r{
       float: right;
       .btn{
         .el-button{
          padding: 8px 15px;
          border:0;
        }
       }
        
      //  margin-top:4px;
      //  width: 100px;
      //  height: 30px;
      //  line-height: 30px;
      //  background-color: red;
      //  text-align: center;
      //  color:#fff;
      //  font-size: 14px;
     }
   }
 }
</style>

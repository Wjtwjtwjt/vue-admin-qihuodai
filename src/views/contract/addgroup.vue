<template>
  <div class="addgroups">
    <h3>添加合约</h3>
    <el-form class="addgroup-from">
      <div class="addgroup">
        <div class="addgroup-b">
          <ul>
            <li>
              <h5 class="heading">组名</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
            </li>
            <li>
              <h5 class="heading">简介</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
            </li>
            <li>
              <h5 class="heading">提示</h5>
               <p class="pred">点击保存后跳转到添加合约界面</p>
              <span>提示</span>
            </li>
          </ul>
        </div>
      </div>
      <el-form-item class="btn">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      checked: true,
      checkList: ["日"]
    };
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
.addgroups {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  .addgroup {
    width: 100%;
    .addgroup-b {
      width: 100%;
      ul {
        width: 100%;
        list-style: none;
        padding: 0;
        margin-top: 0px;
        li {
          border: 1px solid #ccc;
          padding: 15px;
          box-sizing: border-box;
          margin-top: -1px;
          .heading {
            float: left;
            width: 140px;
            margin-right: -140px;
            text-align: right;
          }
          .pred{
              padding-left: 145px;
              font-size: 14px;
              padding-top: 5px;
              color:red;
          }
          .usergroup {
            display: inline-block;
          }
          .file {
            display: inline-block;
          }
          .heads {
            float: left;
            width: 140px;
            margin-bottom: -15px;
            margin-right: -140px;
            text-align: right;
            margin-top: auto;
          }
          .sp {
            margin-left: 251px;
          }
          .el-form-item {
            width: 600px;
            margin-left: 150px;
            margin-top: 10px;
            margin-bottom: 0px;
            .el-input {
              width: 300px;
            }
          }
          span {
            display: block;
            font-size: 13px;
            color: rgb(119, 113, 113);
            margin-left: 151px;
          }
        }
      }
    }
    .addgroup-m {
      width: 100%;
      padding: 15px 5px 5px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      ul {
        width: 100%;
        height: 100%;
        list-style: none;
        padding-left: 0;
        li {
          border: 1px solid #ccc;
          margin-bottom: 25px;
          padding-left: 15px;
          .heading {
            float: left;
            width: 140px;
            margin-right: -140px;
            text-align: right;
          }
          .heads {
            float: left;
            width: 140px;
            margin-bottom: -15px;
            margin-right: -140px;
            text-align: right;
            margin-top: auto;
          }
          .sp {
            margin-left: 251px;
          }
          .el-form-item {
            width: 600px;
            margin-left: 150px;
            margin-top: 10px;
            margin-bottom: 0px;
            .el-input {
              width: 300px;
            }
          }
          span {
            display: block;
            font-size: 13px;
            color: rgb(119, 113, 113);
            margin-left: 151px;
          }
        }
      }
    }
  }

  .btn {
    margin-left: 115px;
    margin-top: 20px;
  }
}
</style>

<template>
  <div class="editbackcards">
    <h3>添加银行卡</h3>
    <el-form class="editbackcard-from">
      <div class="editbackcard">
        <div class="editbackcard-b">
          <ul>
            <li>
              <h5 class="heading">持卡人姓名</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span>持卡人姓名</span>
            </li>
            <li>
              <h5 class="heading">开户行</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span>开户行</span>
            </li>
            <li>
              <h5 class="heading">卡号</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span>卡号</span>
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
export default {};
</script>
<style lang="scss" scoped>
.editbackcards {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .editbackcard {
    width: 100%;
    .editbackcard-b {
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
  }
}
</style>


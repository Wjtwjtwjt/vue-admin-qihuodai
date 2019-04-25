<template>
  <div class="customers">
    <el-form class="customer-form">
      <div class="customer">
        <div class="customer-t">
          <span>+</span>客服设置
        </div>
        <div class="customer-b">
          <ul>
            <li>
              <h5 class="heading">客服微信号</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">客服微信号</span>
            </li>
            <li>
              <h5 class="heading">客服电话</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">客服电话</span>
            </li>
            <li>
              <h5 class="heading">客服QQ</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">客服QQ</span>
            </li>
          </ul>
        </div>
      </div>
      <el-form-item class="btn">
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped="" type="text/css">
.customers {
  width: 100%;
  height: 100%;
  .customer {
    width: 100%;
    .customer-t {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      padding-left: 10px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      background-color: rgb(238, 231, 231);
      span {
        font-size: 24px;
        font-weight: 700;
        padding-top: 15px;
        padding-right: 5px;
      }
    }
    .customer-b {
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
          .heading {
            float: left;
            width: 140px;
            margin-right: -140px;
            text-align: right;
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
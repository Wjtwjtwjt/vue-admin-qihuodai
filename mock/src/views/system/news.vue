<template>
  <div class="customers">
    <el-form class="customer-form">
      <div class="customer">
        <div class="customer-t">
          <span>+</span>阿里短信设置（新版）
        </div>
        <div class="customer-b">
          <ul>
            <li>
              <h5 class="heading">AccessKeyID</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">AccessKeyID</span>
            </li>
            <li>
              <h5 class="heading">AccessKeySecret</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">AccessKeySecret</span>
            </li>
            <li>
              <h5 class="heading">短信签名</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">短信签名,在阿里云短信服务添加，例如：阿里云短信测试专用</span>
            </li>
            <li>
              <h5 class="heading">注册</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">短信模板Code（注册）,在阿里云短信服务添加，例如：SMS_0001</span>
            </li>
            <li>
              <h5 class="heading">修改密码</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">短信模板Code（修改密码）,在阿里云短信服务添加，例如：SMS_0001</span>
            </li>
            <li>
              <h5 class="heading">修改银行卡</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">短信模板Code（修改银行卡）,在阿里云短信服务添加，例如：SMS_0001</span>
            </li>
            <li>
              <h5 class="heading">警戒价</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">短信模板Code（警戒价）,在阿里云短信服务添加，例如：SMS_0001</span>
            </li>
            <li>
              <h5 class="heading">实名认证通过</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">短信模板Code（实名认证通过）,在阿里云短信服务添加，例如：SMS_0001</span>
            </li>
            <li>
              <h5 class="heading">实名认证不通过</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
              <span class="sp">短信模板Code（实名认证不通过）,在阿里云短信服务添加，例如：SMS_0001</span>
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
  .customer{
    width: 100%;
    .customer-t{
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
  .customer-b{
    width: 100%;
    ul {
      width: 100%;
      list-style: none;
      padding: 0;
      margin-top: 0px;
      li{
         border: 1px solid #ccc;
        padding: 15px;
        box-sizing: border-box;
        margin-bottom: -1px;
        margin-top: -1px;
        .heading {
          float: left;
          width: 140px;
          margin-right: -140px;
          text-align: right;
        }
        .el-form-item{
            width: 600px;
            margin-left: 150px;
            margin-top: 10px;
            margin-bottom: 0px;    
           .el-input{
               width:300px
           } 
        }
        span{
             display: block;
               font-size: 13px;
               color:rgb(119, 113, 113);
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
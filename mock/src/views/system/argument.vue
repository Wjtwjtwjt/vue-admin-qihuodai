<template>
  <div class="arguments">
    <el-form class="argument-from">
      <div class="argument">
        <div class="argument-t">
          <span>+</span>赠金设置
        </div>
        <div class="argument-b">
          <ul>
            <li>
              <h5 class="heading">注册</h5>
              <el-form-item label="额度">
                <el-input></el-input>元
              </el-form-item>
              <el-form-item label="提现条件">
                :交易
                <el-input></el-input>手
              </el-form-item>
              <span class="sp">注册送赠金的额度,提现条件</span>
            </li>
            <li>
              <h5 class="heading">充值</h5>
              <el-form-item label="赠送条件">
                <el-input></el-input>元
              </el-form-item>
              <el-form-item label="额度">
                :交易
                <el-input></el-input>元
              </el-form-item>
              <el-form-item label="提现条件">
                :交易
                <el-input></el-input>元
              </el-form-item>
              <span class="sp">充值送赠金的额度,提现条件</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="argument">
        <div class="argument-t">
          <span>+</span>出入金设置
        </div>
        <div class="argument-b">
          <ul>
            <li>
              <h5 class="heading">最小入金金额</h5>
              <el-form-item>
                <el-input></el-input>元
              </el-form-item>
              <span>最小入金金额,单位:元</span>
            </li>
            <li>
              <h5 class="heading">入金手续费比例</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>入金手续费比例(%)</span>
            </li>
            <li>
              <h5 class="heading">入金固定手续费</h5>
              <el-form-item>
                <el-input></el-input>元
              </el-form-item>
              <span>入金固定手续费,单位:元</span>
            </li>
            <li>
              <h5 class="heading">最小出金金额</h5>
              <el-form-item>
                <el-input></el-input>元
              </el-form-item>
              <span>最小出金金额,单位:元</span>
            </li>
            <li>
              <h5 class="heading">出金手续费比列</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>出金手续费比列(%)</span>
            </li>
            <li>
              <h5 class="heading">出金固定手续费</h5>
              <el-form-item>
                <el-input></el-input>元
              </el-form-item>
              <span>出金固定手续费,单位:元</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="argument">
        <div class="argument-t">
          <span>+</span>交易设置
        </div>
        <div class="argument-b">
          <ul>
            <li>
              <h5 class="heading">留仓费率</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>留仓费率(保留两位小数)%</span>
            </li>
            <li>
              <h5 class="heading">涨跌幅</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>超过设定的值后不可交易(%)</span>
            </li>
            <li>
              <h5 class="heading">涨跌幅2</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>连续两个交易日涨跌幅超过设定的值后不可交易</span>
            </li>
            <li>
              <h5 class="heading">单一合约封顶金额</h5>
              <el-form-item>
                <el-input></el-input>元
              </el-form-item>
              <span>单一合约封顶金额,超过设定的值后不可交易</span>
            </li>
            <li>
              <h5 class="heading">单人单合约封顶金额</h5>
              <el-form-item>
                <el-input></el-input>元
              </el-form-item>
              <span>单人单合约封顶金额，超过设定的值后不可交易</span>
            </li>
            <li>
              <h5 class="heading">下单最低金额</h5>
              <el-form-item>
                <el-input></el-input>元
              </el-form-item>
              <span>下单最低金额</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="argument">
        <div class="argument-t">
          <span>+</span>平仓设置
        </div>
        <div class="argument-b">
          <ul>
            <li>
              <h5 class="heading">默认占用信用金止盈百分比</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>默认占用信用金止盈百分比</span>
            </li>
            <li>
              <h5 class="heading">最低占用信用金止盈百分比</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>最低占用信用金止盈百分比</span>
            </li>
            <li>
              <h5 class="heading">默认占用信用金止损百分比</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>默认占用信用金止损百分比</span>
            </li>
            <li>
              <h5 class="heading">最高占用信用金止损百分比</h5>
              <el-form-item>
                <el-input></el-input>元
              </el-form-item>
              <span>最高占用信用金止损百分比</span>
            </li>
            <li>
              <h5 class="heading">最低占用信用金止损百分比</h5>
              <el-form-item>
                <el-input></el-input>%
              </el-form-item>
              <span>最低占用信用金止损百分比</span>
            </li>
            <li>
              <h5 class="heading">最小时间</h5>
              <el-form-item>
                <el-input></el-input>分钟
              </el-form-item>
              <span>建仓时间小于该值不能平仓</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="argument">
        <div class="argument-t">
          <span>+</span>支付设置
        </div>
        <div class="argument-b">
          <ul>
            <li>
              <h5 class="heads">网关支付</h5>
              <div class="bt">
                <el-radio v-model="radio" label="1">升级中</el-radio>
              </div>
              <span>网关支付</span>
            </li>
            <li>
              <h5 class="heads">快捷支付</h5>
              <div class="bt">
                <el-checkbox v-model="checked">升级中</el-checkbox>
              </div>

              <span>快捷支付</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="argument">
        <div class="argument-t">
          <span>+</span>其他设置
        </div>
        <div class="argument-b">
          <ul>
            <li>
              <h5 class="heads">注册机构码开关</h5>
              <div class="bt">
                <el-radio v-model="radio" label="1">开启</el-radio>
                <el-radio v-model="radio" label="2">关闭</el-radio>
              </div>
              <span>注册机构码开关，开启后要有机构码才能完成注册</span>
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
      checked: true
    };
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
.arguments {
  width: 100%;
  height: 100%;
  .argument {
    width: 100%;
    .argument-t {
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
  }
  .argument-b {
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
      .bt {
        display: inline;
        margin-left: 151px;
      }
    }
  }
   .btn {
      margin-left: 115px;
      margin-top: 20px;
    }
}
</style>
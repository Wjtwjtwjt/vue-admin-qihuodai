<template>
  <div class="addlists">
    <h3>添加合约</h3>
      <el-form class="addlist-from">
        <div class="addlist">
          <div class="addlist-t">
            <span>+</span>基础设定
          </div>
          <div class="addlist-b">
            <ul>
              <li>
                <h5 class="heading">合约名</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
              </li>
              <li>
                <h5 class="heading">合约代码</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
              </li>
              <li>
                <h5 class="heading">合约代码前缀</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
                <span>国内合约：nf_国际合约：hf_</span>
              </li>
              <li>
                <h5 class="heading">所属交易所识别</h5>
                <el-form-item class="usergroup">
                  <el-select placeholder="用户组">
                    <!-- v-model="tableData.id"  -->
                    <el-option></el-option>
                    <!-- v-for="item in tableData"
                    :key="item.id"
                    :label="item.label"
                    :value="item.id"-->
                  </el-select>
                </el-form-item>
              </li>
              <li>
                <h5 class="heading">规格</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
                <span>规格</span>
              </li>
              <li>
                <h5 class="heading">单位</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
                <span>单位</span>
              </li>
              <li>
                <h5 class="heading">最小交易金额</h5>
                <el-form-item>
                  <el-input></el-input>港币
                </el-form-item>
                <span>最小交易金额</span>
              </li>
              <li>
                <h5 class="heading">交易手续费</h5>
                <el-form-item>
                  <el-input></el-input>人民币
                </el-form-item>
                <span>交易手续费(人民币)</span>
              </li>
              <li>
                <h5 class="heading">交易手续费</h5>
                <el-form-item label="1.">
                  <el-input></el-input>港币
                </el-form-item>
                <el-form-item label="2.">
                  <el-input></el-input>港币
                </el-form-item>
                <el-form-item label="3.">
                  <el-input></el-input>港币
                </el-form-item>
                <el-form-item label="4.">
                  <el-input></el-input>港币
                </el-form-item>
                <el-form-item label="5.">
                  <el-input></el-input>港币
                </el-form-item>
                <span>触发止损额度选项</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="addlist">
          <div class="addlist-t">
            <span>+</span>时间设定
          </div>
          <div class="addlist-m">
            <ul>
              <li>
                <h5 class="heading">交易日设定</h5>
                <el-form-item>
                  <el-checkbox-group v-model="checkList">
                    <el-checkbox label="日"></el-checkbox>
                    <el-checkbox label="一"></el-checkbox>
                    <el-checkbox label="二"></el-checkbox>
                    <el-checkbox label="三"></el-checkbox>
                    <el-checkbox label="四"></el-checkbox>
                    <el-checkbox label="五"></el-checkbox>
                    <el-checkbox label="六"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </li>
              <li>
                <h5 class="heading">禁止交易时间设定</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
              </li>
              <li>
                <h5 class="heading">买入时间段设定</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
              </li>
              <li>
                <h5 class="heading">卖入时间段设定</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
              </li>
              <li>
                <h5 class="heading">清仓时间段设定</h5>
                <el-form-item>
                  <el-input></el-input>
                </el-form-item>
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
.addlists {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  .addlist {
    width: 100%;
    .addlist-t {
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
    .addlist-b {
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
  .addlist-m {
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
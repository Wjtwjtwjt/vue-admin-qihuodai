<template>
  <div class="editbourses">
    <h3>修改交易所</h3>
    <el-form class="editbourse-from">
      <div class="editbourse">
        <div class="editbourse-t">
          <span>+</span>基础设定
        </div>
        <div class="editbourse-b">
          <ul>
            <li>
              <h5 class="heading">香港交易所</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
            </li>
            <li>
              <h5 class="heading">交易所代码</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
            </li>
            <li>
              <h5 class="heading">币种</h5>
              <el-form-item class="usergroup">
                <el-select placeholder="币种">
                  <!-- v-model="tableData.id"  -->
                  <el-option></el-option>
                  <!-- v-for="item in tableData"
                    :key="item.id"
                    :label="item.label"
                  :value="item.id"-->
                </el-select>
              </el-form-item>
              <span>币种</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="editbourse">
        <div class="editbourse-t">
          <span>+</span>时间设定
        </div>
        <div class="editbourse-m">
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
.editbourses {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  .editbourse {
    width: 100%;
    .editbourse-t {
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
    .editbourse-b {
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
    .editbourse-m {
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
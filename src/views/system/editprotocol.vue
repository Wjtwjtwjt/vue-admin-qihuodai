<template>
  <div class="editprotocol">
    <el-form class="editprotocol-from">
      <div class="editprotocol-t">
        <span></span>添加协议
      </div>
      <div class="editprotocol-b">
        <ul>
          <li>
            <h5 class="heading">合约名</h5>
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
            <h5 class="heading">标题</h5>
            <el-form-item>
              <el-input></el-input>
            </el-form-item>
            <span>标题</span>
          </li>
          <li>
            <h5 class="heading">内容</h5>
            <tinymce class="content" v-model="content" :height="300" />
            <span>内容</span>
          </li>
        </ul>
      </div>
       <el-form-item class="btn">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Tinymce from "@/components/Tinymce";
export default {
  name: "TinymceDemo",
  components: { Tinymce },
  data() {
    return {
      content: ""
    };
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
.editprotocol {
  width: 100%;
  padding: 15px 15px 0;
  background-color: #fff;
  .editprotocol-t {
    height: 30px;
    line-height: 30px;
    background-color: rgb(212, 204, 204);
    span {
      display: inline-block;
      width: 15px;
    }
  }
  .editprotocol-b {
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
        .content{
         width: 940px;
          margin-left: 150px;
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
  .editprotocol-t::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 30px;
    background-color: red;
  }
   .btn {
    margin-left: 115px;
    margin-top: 20px;
  }
}
</style>

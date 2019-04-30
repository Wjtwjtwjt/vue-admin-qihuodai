<template>
  <div class="addguide">
    <h3>添加指引</h3>
    <!-- ref="postForm" :model="postForm" :rules="rules" -->
    <el-form  class="faddguide-from">
      <div class="addguide-b">
        <ul>
          <li>
            <h5 class="heading">标题</h5>
            <el-form-item>
              <el-input></el-input>
            </el-form-item>
            <span>标题</span>
          </li>
          <li>
            <h5 class="heading">内容</h5>
            <el-form-item prop="content" style="margin-bottom: 30px; width:auto">
              <!-- 内容 v-model="postForm.content"-->
              <Tinymce ref="editor"  :height="400"/>
            </el-form-item>
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
// import { validURL } from "@/utils/validate";
// import { fetchArticle } from '@/api/article'
// import { searchUser } from '@/api/remote-search'

const defaultForm = {
  title: "", // 文章题目
  content: "" // 文章内容
};

export default {
  name: "AddGuide",
  components: { Tinymce },
};
</script>

<style lang="scss" scoped>
.addguide {
  width: 100%;
  padding: 15px 15px 0;
  background-color: #fff;
  .addguide-b {
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
   .btn {
    margin-left: 115px;
    margin-top: 20px;
  }
}
</style>

<template>
    <div class="edituserlists">
    <h3>修改账户信息</h3>
    <el-form class="edituserlist-from">
      <div class="edituserlist">
        <div class="edituserlist-b">
          <ul>
            <li>
              <h5 class="heading">账户名</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
            </li>
            <li>
              <h5 class="heading">手机号</h5>
              <el-form-item>
                <el-input></el-input>
              </el-form-item>
            </li>
            <li>
              <h5 class="heading">杠杆倍率</h5>
               <el-input></el-input>
              <span>杠杆倍率</span>
            </li>
            <li>
              <h5 class="heading">修改密码</h5>
               <el-input></el-input>
              <span>杠杆倍率</span>
            </li>
            <li>
              <h5 class="heading">重复密码</h5>
               <el-input></el-input>
              <span>杠杆倍率</span>
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
export default {
    
}
</script>
<style lang="scss" scoped>

</style>

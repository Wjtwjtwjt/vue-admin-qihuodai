<template>
  <div class="bank">
    <div class="bank-t">
      <span></span>银行转账记录
    </div>
    <div class="bank-m">
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true" :model="tableData" @submit.native.prevent>
          <el-form-item class="usergroup bn1">
            <el-select placeholder="大区" size="small">
              <!-- v-model="tableData.id"  -->
              <el-option></el-option>
              <!-- v-for="item in tableData"
                    :key="item.id"
                    :label="item.label"
              :value="item.id"-->
            </el-select>
          </el-form-item>
          <el-form-item class="usergroup bn2">
            <el-select placeholder="所有订单">
              <!-- v-model="tableData.id"  -->
              <el-option></el-option>
              <!-- v-for="item in tableData"
                    :key="item.id"
                    :label="item.label"
              :value="item.id"-->
            </el-select>
          </el-form-item>
          <el-form-item class="bn">
            <el-input v-model="tableData.name" placeholder="代理编码"></el-input>
          </el-form-item>
          <el-form-item class="bn">
            <div class="block">
              <el-date-picker v-model="value1" type="datetime" placeholder="开始日期"></el-date-picker>
            </div>
          </el-form-item>
          <el-form-item class="bn">
            <div class="block">
              <el-date-picker v-model="value1" type="datetime" placeholder="结束日期"></el-date-picker>
            </div>
          </el-form-item>
          
          <el-form-item class="bn">
            <el-input v-model="tableData.name" placeholder="用户名/手机号"></el-input>
          </el-form-item>
          <el-form-item class="usergroup bn3">
            支付状态：
            <el-select placeholder="全部">
              <!-- v-model="tableData.id"  -->
              <el-option></el-option>
              <!-- v-for="item in tableData"
                    :key="item.id"
                    :label="item.label"
              :value="item.id"-->
            </el-select>
          </el-form-item>
          <el-form-item class="bt">
            <el-button type="primary">搜素</el-button>
            <!-- @click="handleAdd" -->
          </el-form-item>
        </el-form>
      </el-col>
    </div>
    <div class="bank-b">
      <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="用户/帐号" prop="date"></el-table-column>
      <el-table-column label="金额" prop="name"></el-table-column>
      <el-table-column label="银行卡信息" prop="name"></el-table-column>
      <el-table-column label="创建时间" prop="name"></el-table-column>
      <el-table-column label="提交时间" prop="name"></el-table-column>
      <el-table-column label="状态" prop="name"></el-table-column>
      <el-table-column label="操作" prop="name"></el-table-column>
    </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      search: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.bank {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .bank-t {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    span {
      display: inline-block;
      width: 15px;
    }
  }
  .bank-t::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
  .bank-m {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    margin-top: 10px;
    .toolbar {
      padding-left: 15px;
    }
  }
  .bank-m::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
  .bt {
    .el-button {
      padding: 8px 15px;
      border: 0;
    }
  }
  .bn /deep/.el-input__inner {
    height: 30px;
  }
  .bn1 /deep/.el-input__inner {
    height: 30px;
    width: 75px;
  }
   .bn2 /deep/.el-input__inner {
    height: 30px;
    width: 105px;
  }
   .bn3 /deep/.el-input__inner {
    height: 30px;
    width: 75px;
  }
}
</style>

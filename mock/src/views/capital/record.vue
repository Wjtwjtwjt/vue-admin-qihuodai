<template>
  <div class="record">
    <div class="record-t">
      <div class="record-t-l">
        <span></span>出金记录
      </div>
      <div class="record-t-r">
        <span>+</span>手动出金
      </div>
    </div>
    <div class="record-m">
      <div class="record-m-l">
        <el-col class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="tableData" @submit.native.prevent>
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
              <el-input v-model="tableData.name" placeholder="上级代理编码"></el-input>
            </el-form-item>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" placeholder="大区编码"></el-input>
            </el-form-item>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" placeholder="用户名、手机名"></el-input>
            </el-form-item>
             <el-form-item class="usergroup bn3">
              状态：
              <el-select placeholder="全部">
                <!-- v-model="tableData.id"  -->
                <el-option></el-option>
                <!-- v-for="item in tableData"
                    :key="item.id"
                    :label="item.label"
                :value="item.id"-->
              </el-select>
            </el-form-item>
             <el-form-item class="usergroup bn3">
              类型：
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
      <div class="record-m-r bt">
        <el-button
          style="margin:0 0 20px 20px;"
          type="primary"
          icon="document"
          @click="handleDownload"
        >导出表格</el-button>
      </div>
    </div>
   <div class="record-b">
      <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="交易编号" prop="date"></el-table-column>
      <el-table-column label="申请人" prop="name"></el-table-column>
      <el-table-column label="出金金额" prop="name"></el-table-column>
      <el-table-column label="手续费" prop="name"></el-table-column>
      <el-table-column label="出金后账户余额" prop="name"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="卡号" prop="name"></el-table-column>
      <el-table-column label="申请时间" prop="name"></el-table-column>
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
.record {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .record-t {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    padding-right: 15px;
    .record-t-l {
      float: left;
      span {
        display: inline-block;
        width: 15px;
      }
    }
    .record-t-l::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
    .record-t-r {
      float: right;
    }
  }

  .record-m {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    margin-top: 10px;
    padding-right: 15px;
    .record-m-l {
      float: left;
      .toolbar {
        padding-left: 15px;
      }
    }
    .record-m-l::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
    .record-m-r{
      float: right;
    }
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

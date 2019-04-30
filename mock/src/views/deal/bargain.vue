<template>
  <div class="bargain">
 <div class="bargain-t">
      <span></span>持仓列表
    </div>
    <div class="bargain-m">
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
            <el-input v-model="tableData.name" placeholder="合约代码"></el-input>
          </el-form-item>
          <el-form-item class="bn">
            <el-input v-model="tableData.name" placeholder="合约名称"></el-input>
          </el-form-item>
          <el-form-item class="usergroup bn3">
            <el-select placeholder="全部">
              <!-- v-model="tableData.id"  -->
              <el-option></el-option>
              <!-- v-for="item in tableData"
                    :key="item.id"
                    :label="item.label"
              :value="item.id"-->
            </el-select>
          </el-form-item>
          <el-form-item class="bn">
            <el-input v-model="tableData.name" placeholder="用户名/手机号"></el-input>
          </el-form-item>
          <el-form-item class="bt">
            <el-button type="primary">搜素</el-button>
            <!-- @click="handleAdd" -->
          </el-form-item>
        </el-form>
      </el-col>
    </div>
  <div class="bargain-b">
      <!-- :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" -->
    <el-table style="width: 100%">
      <el-table-column label="订单编号" prop="date"></el-table-column>
      <el-table-column label="申请人" prop="name"></el-table-column>
      <el-table-column label="所属上级" prop="name"></el-table-column>
      <el-table-column label="合约" prop="name"></el-table-column>
      <el-table-column label="数量（手）" prop="name"></el-table-column>
      <el-table-column label="买/卖" prop="name"></el-table-column>
      <el-table-column label="成交时间" prop="name"></el-table-column>
      <el-table-column label="成交价" prop="name"></el-table-column>
      <el-table-column label="总市值" prop="name"></el-table-column>
      <el-table-column label="占用信用金" prop="name"></el-table-column>
      <el-table-column label="平仓时间" prop="name"></el-table-column>
      <el-table-column label="平仓价" prop="name"></el-table-column>
      <el-table-column label="建仓手续费" prop="name"></el-table-column>
      <el-table-column label="平仓手续费" prop="name"></el-table-column>
      <el-table-column label="总手续费" prop="name"></el-table-column>
      <el-table-column label="平仓盈亏" prop="name"></el-table-column>
      <el-table-column label="实际盈亏" prop="name"></el-table-column>
      <el-table-column label="平仓类型" prop="name"></el-table-column>
      <el-table-column label="止盈价" prop="name"></el-table-column>
      <el-table-column label="止损价" prop="name"></el-table-column>
      <el-table-column label="操作">
        <!-- <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        </template>-->
      </el-table-column>
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
.bargain {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .bargain-t {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    span {
      display: inline-block;
      width: 15px;
    }
  }
  .bargain-t::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
  .bargain-m {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    margin-top: 10px;
    .toolbar {
      padding-left: 15px;
    }
  }
  .bargain-m::before {
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

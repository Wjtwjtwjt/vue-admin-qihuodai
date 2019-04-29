<template>
  <div class="thirdparty">
    <div class="thirdparty-t">
      <span></span>持仓列表
    </div>
    <div class="thirdparty-m">
      <div class="thirdparty-m-l">
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
      <div class="thirdparty-m-r bt">
        <el-button
          style="margin:0 0 20px 20px;"
          type="primary"
          icon="document"
          @click="handleDownload"
        >导出表格</el-button>
      </div>
    </div>
    <div class="thirdparty-b">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="订单号" prop="date"></el-table-column>
        <el-table-column label="商户订单号" prop="name"></el-table-column>
        <el-table-column label="充值用户/帐号" prop="name"></el-table-column>
        <el-table-column label="充值金额" prop="name"></el-table-column>
        <el-table-column label="手续费" prop="name"></el-table-column>
        <el-table-column label="充值后金额" prop="name"></el-table-column>
        <el-table-column label="充值时间" prop="name"></el-table-column>
        <el-table-column label="状态" prop="name"></el-table-column>
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
  },
  methods: {
    handleDownload() {
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = ["Id", "Title", "Author", "Readings", "Date"];
        const filterVal = [
          "id",
          "title",
          "author",
          "pageviews",
          "display_time"
        ];
        const list = this.list;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth
        });
        this.downloadLoading = false;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.thirdparty {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .thirdparty-t {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    span {
      display: inline-block;
      width: 15px;
    }
  }
  .thirdparty-t::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
  .thirdparty-m {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    margin-top: 10px;
    padding-right: 15px;
    .thirdparty-m-l {
      float: left;
      .toolbar {
        padding-left: 15px;
      }
    }
    .thirdparty-m-l::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
     .thirdparty-m-r{
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

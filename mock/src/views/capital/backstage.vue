<template>
  <div class="backstage">
    <div class="backstage-t">
      <div class="backstage-t-l">
        <span></span>后台入金记录
      </div>
      <div class="backstage-t-r">
        <el-form>
          <el-form-item class="bt">
            <el-button type="primary" @click="handleAdd">手动充值</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="backstage-m">
      <div class="backstage-m-l">
        <el-col class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="tableData" @submit.native.prevent>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" placeholder="上级代理编码"></el-input>
            </el-form-item>
            <el-form-item class="bn">
              <el-input v-model="tableData.name" placeholder="大区编码"></el-input>
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
              <el-input v-model="tableData.name" placeholder="用户名、手机名"></el-input>
            </el-form-item>
            <el-form-item class="bt">
              <el-button type="primary">搜素</el-button>
              <!-- @click="handleAdd" -->
            </el-form-item>
          </el-form>
        </el-col>
      </div>
      <div class="backstage-m-r bt">
        <el-button
          type="primary"
          icon="document"
          @click="handleDownload"
        >导出表格</el-button>
      </div>
    </div>
    <div class="backstage-b">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="充值用户/帐号" prop="date"></el-table-column>
        <el-table-column label="充值前金额" prop="name"></el-table-column>
        <el-table-column label="充值金额" prop="name"></el-table-column>
        <el-table-column label="充值后金额" prop="name"></el-table-column>
        <el-table-column label="充值时间" prop="name"></el-table-column>
      </el-table>
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
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
      search: "",
    
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
.backstage {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .backstage-t {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    padding-right: 15px;
    .backstage-t-l {
      float: left;
      span {
        display: inline-block;
        width: 15px;
      }
    }
    .backstage-t-l::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
    .backstage-t-r {
      float: right;
    }
  }

  .backstage-m {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(250, 226, 226);
    margin-top: 10px;
    padding-right: 15px;
    .backstage-m-l {
      float: left;
      .toolbar {
        padding-left: 15px;
      }
    }
    .backstage-m-l::before {
      content: "";
      position: absolute;
      width: 5px;
      height: 40px;
      background-color: red;
    }
    .backstage-m-r {
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
}
</style>

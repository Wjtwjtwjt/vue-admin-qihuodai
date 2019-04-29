<template>
  <div class="userevent">
    <div class="userevent-t">
      <div class="userevent-t-l">
        <span></span>
        <el-col class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="tableData" @submit.native.prevent>
            <el-form-item class="bn">
              <div class="block">
                <el-date-picker v-model="value1" type="datetime" placeholder="开始时间"></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item class="bn">
              <div class="block">
                <el-date-picker v-model="value1" type="datetime" placeholder="结束时间"></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item class="usergroup bn">
              <el-select placeholder="选择事件类型">
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
      <div class="userevent-t-r">
        <el-button
          style="margin:0 0 20px 20px;"
          type="primary"
          icon="document"
          @click="handleDownload"
        >导出表格</el-button>
        <!-- <upload-excel>导入杠杆倍率</upload-excel> -->
      </div>
    </div>
    <div class="userevent-b">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="用户名" prop="date"></el-table-column>
        <el-table-column label="手机号" prop="name"></el-table-column>
        <el-table-column label="事件" prop="name"></el-table-column>
        <el-table-column label="发生时间" prop="name"></el-table-column>
        <el-table-column label="价格" prop="name"></el-table-column>
        <el-table-column label="总市值" prop="name"></el-table-column>
        <el-table-column label="占用信用金" prop="name"></el-table-column>
        <el-table-column label="股数" prop="name"></el-table-column>
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
.userevent {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .userevent-t {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(253, 230, 230);
    position: relative;
    .bt {
      .el-button {
        padding: 8px 15px;
        border: 0;
      }
    }
    .bn /deep/.el-input__inner {
      height: 30px;
    }
    .userevent-t-l {
      float: left;
      .toolbar {
        padding-left: 15px;
      }
    }
    .userevent-t-r {
      float: right;
    }
  }
  .userevent-t::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 40px;
    background-color: red;
  }
}
</style>
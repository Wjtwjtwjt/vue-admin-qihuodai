<template>
  <div class="banner">
    <div class="banner-t">
      <div class="banner-t-l">
        <el-col class="toolbar" style="padding-bottom: 0px;">
          <el-form :inline="true" :model="tableData" @submit.native.prevent>
            <el-form-item class="bn">
              <el-input v-model="tableData.name"></el-input>
            </el-form-item>
            <el-form-item class="bt">
              <el-button type="primary">搜素</el-button>
              <!-- @click="handleAdd" -->
            </el-form-item>
          </el-form>
        </el-col>
      </div>
      <div class="banner-t-r">
        <el-form>
          <el-form-item class="bt">
            <el-button type="primary">添加文章</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="banner-b">
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
      >
        <el-table-column label="编号" prop="date"></el-table-column>
        <el-table-column label="标题" prop="name"></el-table-column>
        <el-table-column label="图片" prop="name">
          <div class="block" v-for="fit in fits" :key="fit">
            <span class="demonstration">{{ fit }}</span>
            <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
          </div>
        </el-table-column>
        <el-table-column label="跳转链接" prop="name"></el-table-column>
        <el-table-column label="状态" prop="name"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope" width="200">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
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
.banner {
  width: 100%;
  padding: 8px 15px;
  background-color: #fff;
  .banner-t {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: rgb(212, 204, 204);
    .toolbar {
      padding-left: 15px;
    }
    .banner-t-l {
      float: left;
    }
    .banner-t-r {
      float: right;
    }
  }
  .banner-t::before {
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
}
</style>

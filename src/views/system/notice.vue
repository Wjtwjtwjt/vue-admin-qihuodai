<template>
  <div class="notice">
    <div class="notice-t">
      <div class="notice-t-l">
        <span></span>公告管理
      </div>
      <div class="notice-t-r">
        <ul>
          <li>
            <el-popover  width="500" trigger="click">
              <el-table><!-- //:data="gridData" -->
                <el-table-column width="120" property="date" label="日期"></el-table-column>
                <el-table-column width="125" property="name" label="姓名"></el-table-column>
                <el-table-column width="125" property="address" label="地址"></el-table-column>
              </el-table>
             
            </el-popover> <el-button slot="reference">发布个人公告</el-button>
          </li>
          <li>
            <el-popover placement="right" width="400" trigger="click">
              <el-table>
                <el-table-column width="100" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="100" property="address" label="地址"></el-table-column>
              </el-table>
              <el-button slot="reference">发布市场公告</el-button>
            </el-popover>
          </li>
          <li>
            <el-popover placement="right" width="400" trigger="click">
              <el-table>
                <el-table-column width="100" property="date" label="日期"></el-table-column>
                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                <el-table-column width="100" property="address" label="地址"></el-table-column>
              </el-table>
              <el-button slot="reference">发布品牌公告</el-button>
            </el-popover>
          </li>
        </ul>
      </div>
    </div>
    <div class="notice-b">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="编号"  type="index">
        </el-table-column>
        <el-table-column label="标题"  prop="name">
        </el-table-column>
        <el-table-column label="类型"  prop="title">
        </el-table-column>
        <el-table-column label="状态"  prop="title">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="scss" scoped="" type="text/css">
 .notice{
   width: 100%;
   padding: 15px 15px 0;
   background-color: #fff;
   .notice-t{
     height: 40px;
     line-height: 40px;
     border: 1px solid rgb(245, 238, 238);
     padding-right:10px; 
    //  padding-left: 5px;
     box-sizing: border-box;
     background-color: rgb(212, 204, 204);
     .notice-t-l{
       float: left;
       position: relative;
       span{
         display: inline-block;
         width: 15px;
       }
     }
     .notice-t-l::before{
       content:'';
       position: absolute;
       height: 38px;
       width: 5px;
      background-color: red;
      
     }
     .notice-t-r{
       float: right;
      //  width: 100px;
       height: 30px;
       line-height: 30px;
      //  background-color: red;
       text-align: center;
       color:#fff;
       font-size: 14px;
       ul{
        //  width: 600px;
         list-style: none;
         li{
           float: left;
           margin-top: -15px;
           margin-left: 15px;
         }
       }
     }
   }
 }
</style>

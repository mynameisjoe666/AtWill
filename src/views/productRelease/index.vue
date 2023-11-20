<!--页面：发布产品-->
<template>
  <div class="layout-center">
    <CSBreadcrumb />
    <div class="box-shadow-bg padding-lg">
      <el-row :gutter="20">
        <el-col :span="10"><positionTabs class="margin-bottom-min" :tabs="tabsList"  v-model="tabActive" /></el-col>
        <el-col :span="8" :offset="6"><el-button @click="$router.push('/addProduct')" class="float-right" size="small"  icon="el-icon-plus" type="primary" plain>新增产品</el-button></el-col>
      </el-row>

      <CS-SearchBar class="margin-bottom-min" width="300" v-model="searchData" placeholder="请输入" />
      <div>
        <CS-table v-loading="listLoading" :data="tableData" row-key="id" default-expand-all
                  :header-cell-style="{ background:'#F6F8FA', fonSize:'12px', color: '#373C4F'}"
                  style="font-size: 12px"
                  header-row-class-name="row-style-gray"
                  :border="false"
                  :tree-props="{ children: 'children', hasChildren: ''}">
          <el-table-column width="400" align="left" label="产品名称"  >
            <template slot-scope="scope">
              <div class="padding-top-mini padding-bottom-mini">
                <img width="79" height="79" :src="scope.row.imgUrl" alt="">
                <div class="margin-left-min" style="display: inline-block; width: 270px">{{scope.row.productName}}</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="left" label="产品规格" prop="productSpec" />
          <el-table-column align="left" label="库存" prop="inventory" />
          <el-table-column align="left" label="销售情况（月）" prop="sales" />
          <el-table-column align="left" label="是否上架" prop="shelf" />
          <el-table-column align="left" label="评估方案" prop="scheme" />
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button size="small" @click="handleLink(scope.row.id)" type="text">预览</el-button>
              <el-button size="small" @click="handleLink(scope.row.id)" type="text">编辑</el-button>
            </template>
          </el-table-column>
        </CS-table>
      </div>
      <el-pagination
          style="text-align: center; padding: 50px 0;"
          background
          border
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
<!--    <div :key="index" v-for="(item, index) in 32">{{item}} {{ index }}</div>-->
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      searchData: '',
      tabActive: 0,
      listLoading: false,
      tabsList: ['全部产品', '已上架', '未上架'],
      tableData: [{
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        productSpec: '40x40   80x80   60x60   180x180',
        inventory: '333',
        sales: '111',
        shelf: '是',
        scheme: '日常生活评估'
      }]
    }
  },
  methods: {
    handleLink(item) {
      this.$router.push(item.path);
    }
  }
}
</script>

<style lang="less" scoped>

</style>



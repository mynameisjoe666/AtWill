<!--页面：学习天地-课程学习-->
<template>
  <div class="layout-response">
    <CSBreadcrumb/>
    <div class="box-shadow-bg padding-lg">
      <positionTabs class="margin-bottom-min" :tabs="tabsList" v-model="tabActive"/>
      <el-row :gutter="20">
        <el-col :span="10">
          <CS-SearchBar class="margin-bottom-min" width="300" v-model="searchData" placeholder="请输入"/>
        </el-col>
        <el-col :span="8" :offset="6">
<!--          <el-button class="float-right" size="small" icon="el-icon-plus" type="primary" plain>新建订单</el-button>-->
        </el-col>
      </el-row>
      <div>
        <courseCard />
      </div>
      <el-pagination
          style="text-align: center; padding: 50px 0;"
          background
          border
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: "course",
  data() {
    return {
      searchData: '',
      tabActive: 0,
      tabsList: ['全部课程', '已学习', '未学习', '学习中', '已学完'],
    }
  },
  methods: {
    handleLink() {
      this.$router.push('/orderDetails');
    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>

/deep/   .el-table__header th {
  border: none;
}
</style>



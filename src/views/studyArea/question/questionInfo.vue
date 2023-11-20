<!--页面：考试信息-->
<template>
  <div class="layout-center ">
    <CSBreadcrumb/>
    <div class="box-shadow-bg padding-lg questionInfo">
      <div class="prompt">
        <div class="font-16 font-bold flex-row flex-start"><i class="el-icon-warning blue1 font-22 margin-right-lt"></i>温馨提示：</div>
        <p class="font-14 gray2">1、考试过程中全程禁止切换出考试窗口范围外，超出范围外则成绩不合格</p>
        <p class="font-14 gray2">2、考试请在时间限制内答题交卷</p>
      </div>
      <div class="data-list-box">
        <h6 class="flex-row flex-center"><i class="staff staff-accounting font-24 margin-right-min"></i>考试信息</h6>
        <dl class="test-list">
          <dd><div class="title">考试名称</div><div class="content black">营销考试2级进阶之路</div></dd>
          <dd><div class="title">考试总分</div><div class="content black">100</div></dd>
          <dd><div class="title">及格分数</div><div class="content black">60</div></dd>
          <dd><div class="title">考试时长</div><div class="content black">30分钟</div></dd>
          <dd><div class="title">考试类型</div><div class="content blue1">正式考试</div></dd>
        </dl>
      </div>
      <div class="text-center">
        <el-button>返回</el-button>
        <el-button type="primary">开始考试</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "questionInfo",
  data() {
    return {
      searchData: '',
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
.prompt {
  background-color: #EFF3FF;
  padding: 60px;
  line-height: 32px;
  box-sizing: border-box;
  width: 100%;
  height: 195px;
}
/deep/   .el-table__header th {
  border: none;
}
.test-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 80px;
  border-top: 1px solid #E9E9E9;
  dd {
    width: 100%;
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #E9E9E9;
    font-size: 14px;
    .title {
      width: 20%;
      padding-left: 30px;
      text-align: left;
      padding-right: 20px;
    }
    .content {
      width: 70%;
    }
  }
}
.data-list-box {
  padding: 120px;
}
.questionInfo {
  padding-bottom: 300px!important;
}
</style>



<!--页面：课程列表-->
<template>
  <div class="courseList">
    <CSBreadcrumb/>
    <div class="box-shadow-bg padding-lg">
      <div class="title flex-row space-between"><h1 class="font-24 font-bold">医疗器械品类销售常用技巧</h1> <cite>共 <span>32</span>节课</cite></div>
      <img class="margin-top-min" width="100%" src="@/assets/img/photo/banner1.png" alt="">
      <div>
        <h1 class="font-16 font-bold padding-top-mini">课程简介</h1>
        <p class="font-14 padding-top-mini">
          1.分析各类客户心理 目前,市场上医用器械的销售方式可大致分为三种: 一是社区定点或不定点销售,俗称“跑腿式”; 第二种是会议营销,具体还可分为单一会议营销型和复合会议营销... <br>
          2.医疗器械7大销售技巧和话术3.销售话术:安全感 人总是趋利避害的,内心的安全感是最基本的心理需求,用安全感来说服客户是最常用的销售话术。安全感的反面是...
        </p>
        <mediaList />
        <el-pagination
            style="text-align: center; padding: 50px 0;"
            background
            border
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "courseList"
}
</script>

<style scoped>
  .courseList {
    width: 1186px;
    margin: 0 auto;
  }
</style>

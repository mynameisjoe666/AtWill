<!--组件：媒体列表-->
<template>
  <div>
    <ul class="media-list">
      <li @click="()=> {$router.push('/courseDetailed')}" v-for="(item, index) in 8" :key="index">
        <i class="staff staff-video"></i>
        <div>
          <p class="font-14">视频：(6-1) 话术讲解</p>
          <p class="font-14 margin-top-min">已学时长： 93s</p>
        </div>
        <div class="btn-right">
          <el-button size="small" type="primary">立即学习</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MediaList",
}
</script>

<style lang="less" scoped>
  .media-list {
    li {
      padding: 20px 0;
      border-bottom: #f1f1f1 solid 1px;
      display: flex;
      align-items: center;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        border-bottom: #e1e1e1 solid 1px;
        .btn-right {
          transform: translateX(0px);
          //height: 40px;
        }
      }
    }
  }
  .staff-video {
    margin-right: 20px;
  }
  .btn-right {
    margin-left: auto;
    transition: all 0.3s;
    transform: translateX(120px);
    margin-right: 10px;
    //height: 40px;
  }
  .staff-video {
    font-size: 48px;
  }
</style>

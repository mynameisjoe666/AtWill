<!--组件：课程组件-->
<template>
  <div class="courseCard">
    <ul class="both">
      <li class="course-card-list" v-for="(item, index) in 32" :key="index">
        <div @click="onClick">
          <div class="img-box"><img  :src="require(`@/assets/img/photo/img${Math.ceil(Math.random()*5)}.png`)" alt=""></div>
          <div class="ellipsis font-14 text-care ">医疗器械销售目标常识</div>
          <div class="flex-row space-between text-care" ><p class="font-12 gray3">所属: 课程演示</p><p class="font-12 gray3">时长：30s</p></div>
        </div>
      </li>
    </ul>
    <el-empty description="暂无数据"></el-empty>
  </div>
</template>

<script>
export default {
  name: "goodsCard",
  methods: {
    onClick() {
      this.$router.push('/courseList')
    }
  }
}
</script>

<style lang="less" scoped>
  .courseCard {
    width: calc(100% + 25px);
  }
  .course-card-list {
    width: 240px;
    float: left;
    margin-bottom: 20px;
    & > div {
      width: 220px;
      cursor: pointer;
      padding-bottom: 10px;
      transition: all 0.3s;
      box-sizing: border-box;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06);
      .img-box {
        width: 220px;
        overflow: hidden;
        & > img {
          width: 100%;
          transition: all 0.3s;
        }
      }
      &:hover {
        box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.08);
         img {
          transform: scale(1.4);
        }
      }
    }
  }
  .text-care {
    padding: 10px 10px 0 10px;
  }
</style>

<!--组件：考试列表组件-->
<template>
  <div class="questionCard">
    <ul class="both">
      <li class="question-card-list" v-for="(item, index) in 32" :key="index">
        <div class="flex-row" >
          <div class="img-box"><img  :src="require(`@/assets/img/photo/img${Math.ceil(Math.random()*5)}.png`)" alt=""></div>
          <div>
            <div class="ellipsis font-14 text-care "><span class="font-18 font-bold">跨界经理人进阶实战</span><cite :key="tag" v-for="tag in 3" class="tag tag-blue">免费</cite></div>
            <div class="text-care margin-top-lt"><p class="font-12 gray3">所属课程: 课程演示</p></div>
            <div class="text-care flex-row margin-top-lt"><div :key="tag" v-for="tag in 3" class="font-12 gray3">学习时长: 30s</div></div>
          </div>
          <div class="btn-right">
            <el-button @click="onClick" type="primary" size="small" plain>开始考试</el-button>
          </div>
        </div>
      </li>
    </ul>
    <el-empty description="暂无数据"></el-empty>
  </div>
</template>

<script>
export default {
  name: "questionCard",
  methods: {
    onClick() {
      this.$router.push('/questionInfo')
    }
  }
}
</script>

<style lang="less" scoped>
  .questionCard {
    width: 100%;
  }

  .question-card-list {
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.06);
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    &:hover {
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    }
    & > div {
      cursor: pointer;
      box-sizing: border-box;
      transition: all 0.3s;
      border-radius: 10px;
      padding: 10px;
      .img-box {
        width: 155px;
        height: 94px;
        overflow: hidden;
        border-radius: 3px;
        margin-right: 30px;
        & > img {
          width: 100%;
          transition: all 0.3s;
        }
      }
      &:hover {
          .btn-right {
            transform: translateX(0px);
            //height: 40px;
          }
         img {
          transform: scale(1.4);
        }
      }
    }
  }
  .btn-right {
    margin-left: auto;
    transition: all 0.3s;
    transform: translateX(130px);
    margin-right: 10px;
    //height: 40px;
  }
  .text-care {
    //padding: 10px 10px 0 10px;
  }
</style>

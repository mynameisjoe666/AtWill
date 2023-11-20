<!--组件:评论区模块-->
<template>
  <div class="CommentsSection">
    <div class="comments-list flex-row" v-for="(item, index) in comments" :key="index">
      <img class="user-img" :src="item.imgUrl" alt="">
      <div class="right-box">
        <div>{{ item.name }}</div>
        <div class="gray3 margin-top-lt">7个月前</div>
        <div class="margin-top-lt">
          <p>{{ item.content }}</p>
          <template v-if="item.children">
            <div v-for="(reply, index) in item.children" :key="index"  class="reply">
              <cite class="font-bold">{{reply.name}}回复 : {{ reply.content }}</cite>
              <span class="float-right gray3">{{ reply.time }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentsSection",
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  }
}
</script>

<style lang="less" scoped>
  .CommentsSection {
    font-size: 14px;
    color: @Black;
    width: 100%;
  }
  .comments-list {
    padding: 20px 0;
    width: 100%;
    border-bottom: #EEEFF2 solid 1px;
  }
  .right-box {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .user-img {
    width: 46px;
    height: 46px;
    border-radius: 100%;
    margin-right: 10px;
  }
  .reply {
    margin-top: 15px;
    padding: 15px;
    font-size: 12px;
    background-color: #F4F4F4;
  }
</style>

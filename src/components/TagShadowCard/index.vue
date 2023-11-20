<!--组件：带有阴影的标签伸缩块-->
<template>
  <div class="tag-shadow-card">
    <div  class="title-bar toggle flex-row space-between">
      <div @click="visible = !toggle ? !visible : true" :class="{on:visible}" class="title staff staff-arror-donw" v-text="title"></div>
      <div v-show="visible || rightBtbShow">
        <slot name="right-btn"></slot>
      </div>
    </div>
    <div class="slot-box" v-show="visible">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TagShadowCard',
    props: {
      title: [String],
      rightBtbShow: {
        type: Boolean,
        default: false
      },
      toggle: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        visible: true
      }
    },
    mounted() {
      this.visible = this.show
    }
  }
</script>

<style lang="less" scoped>
  .tag-shadow-card {
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0 0 10px rgba(232, 234, 241, 0.6);
    margin-top: 15px;
    .title-bar {
      position: relative;
      width: 100%;
      padding: 20px 25px 20px 25px;
      height: 68px;
      box-sizing: border-box;
      overflow: hidden;
      & > .title {
        display: flex;
        height: 20px;
        justify-content: flex-start;
        align-items: center;
        background-color: #FFF;
        width: fit-content;
        font-size: 14px;
        cursor: pointer;
        &::before {
          transform: rotate(-90deg);
          color: #BCBEC4;
          margin-right: 12px;
          font-size: 14px;
        }
        &.on {
          &::before {
            transform: rotate(0deg);
          }
        }
      }
    }
  }
  .slot-box {
    padding: 10px 25px 20px;
  }
</style>>

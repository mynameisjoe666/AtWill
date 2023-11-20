<!--组件：标签伸缩模块-->
<template>
  <div class="tag-card">
    <div class="title-bar toggle flex-row space-between">
      <div class="title" v-text="title"></div>
      <div @click="visible = !visible" class="elderlyFont elderly-sgoole" :class="{on:visible}">{{visible ? '收起' : '展开'}}</div>
    </div>
    <div class="slot-box" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TagCard',
    props: {
      title: [String]
    },
    data() {
      return {
        visible: true
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .tag-card {
    width: 100%;
    min-height: 50px;
    .title-bar {
      position: relative;
      width: 100%;
      &.toggle {
        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background-color: #EFEFEF;
          position: absolute;
          top: 50%;
          z-index: 1;
        }
      }

      & > .title {
        display: flex;
        height: 20px;
        justify-content: flex-start;
        align-items: center;
        padding-right: 20px;
        background-color: #FFF;
        z-index: 2;
        position: relative;
        width: fit-content;
        font-size: 14px;
        &::before {
          content: '';
          display: block;
          width: 5px;
          height: 16px;
          border-radius: 3px;
          background-color: #211BCE;
          margin-right: 12px;
        }
      }

      .elderly-sgoole {
        color: #747474;
        font-size: 12px;
        background-color: #fff;
        position: relative;
        z-index: 2;
        padding-left: 15px;
        cursor: pointer;
        &::before {
          font-size: 14px;
          display: inline-block;
          transform: rotate(180deg);
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
    padding: 25px;
  }
</style>>

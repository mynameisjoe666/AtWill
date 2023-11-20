<!--组件：标题-->
<template>
  <div class="title-bar flex-row space-between">
    <div class="title-text flex-row flex-start">{{ title }}</div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    title: {
      type: String,
      default: "标题内容"
    }
  }
}
</script>

<style lang="less" scoped>
  .title-bar {
    .title-text {
      font-size: 14px;
      &:before {
        display: inline-block;
        content: "";
        width: 6px;
        height: 16px;
        border-radius: 3px;
        background-color: @Blue1;
        margin-right: 10px;
      }
    }
  }
</style>

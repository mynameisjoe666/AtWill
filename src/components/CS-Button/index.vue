<!--组件:自定义按钮-->
<template>
  <div class="CSButton flex-row flex-start">
     <i v-if="icon" :class="icon"></i>
     <span><slot lang="span"></slot></span>
  </div>
</template>

<script>
  export default {
    name: 'CS-Button',
    props: {
      value: [String],
      icon: [String]
    }
  }
</script>

<style lang="less" scoped>
   .CSButton {
     cursor: pointer;
     display: inline-flex;
      & > i {
        font-size: 20px;
        margin-right: 10px;
      }
     & > span {
        font-size: 12px;
      }
   }
</style>

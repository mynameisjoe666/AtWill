<!--组件：预览列表-->
<template>
  <div class="preview-list">
    <div class="item" v-for="(item, index) in parameters" :key="index">
      <div class="title" v-text="item.name"></div>
      <div class="content">
        {{ item.value || '--' }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PreviewList',
    props: {
      parameters: {
        type: Array,
        default:()=> [{name:'名称', value:'值'}]
      },
    }
  }
</script>

<style lang="less" scoped>
  .preview-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    & > div.item {
      display: flex;
      width: 50%;
      font-size: 14px;
      padding: 18px 0;
      line-height: 24px;
      .title {
        color: #9599A5;
        min-width: 120px;
        text-align: right;
      }
      .content {
        color: #606266;
        padding-left: 24px;
      }
    }
  }
</style>>

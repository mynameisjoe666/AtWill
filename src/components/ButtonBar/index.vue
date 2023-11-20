<template>
    <div class="btn-arror-right hover-scale flex-row flex-center">
        查看全部
        <i class="staff staff-arror-right-rounded font-12"></i>
    </div>
</template>

<script>
    export default {
        name: "btnMore"
    }
</script>

<style scoped lang="less">
    .btn-arror-right {
        font-size: 12px;
        color: @Gray3;
        margin-top: 20px;
        cursor: pointer;
    & > i {
          margin-left: 5px;
          color: @Gray4;
      }
    }
</style>
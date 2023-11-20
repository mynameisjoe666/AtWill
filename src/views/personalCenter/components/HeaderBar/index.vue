<!--组件: 个人中心头部-->
<template>
  <div id="HeaderBar">
    <div class="fixed-box" :style="{'padding-left':`${contentLeft}px`}">
      <el-row  type="flex" justify="space-around" :gutter="20" class="row-bar">
        <el-col class="avatar-box">
          <el-avatar :size="80" :src="circleUrl"></el-avatar>
        </el-col>
        <el-col class="paragraph-box">
          <div class="name-bar">尴尬的牛马</div>
          <div class="flex-row user-info-bar flex-items-center">
            <div>ID:1001 </div>
            <div>技术部</div>
            <div>积分:1000</div>
          </div>
        </el-col>
      </el-row>
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="(item) in pageType" :key="item.routerName" :index="item.routerName">{{item.name}}
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      oldManInfo: [Object],
      pageType: [Array],
      activeIndex: [String],
      userId: [String]
    },
    data() {
      return {
        // faex
        circleUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        contentLeft: '',
        contentWidth: '',
      }
    },
    methods: {
      handleSelect(key) {
        this.$router.push(key)
      }
    }
  }
</script>
<style lang="less" scoped>
  #HeaderBar {
    width: 100%;
    margin-bottom: 22px;
  }
  .avatar-box {
    width: 100px;
    margin-left: -10px;
  }

  .name-bar {
    font-size: 24px;
    color: #383C4D;
    margin-bottom: 25px;
  }

  .row-bar {
    padding: 35px;
  }

  .el-menu {
    display: flex;
    justify-content: center;
    border: 1px solid #F4F6FA;
  }

  .user-info-bar {
    font-size: 14px;
    color: #525566;

    & > div {
      padding: 0 15px;
      border-left: #DBDBDB solid 1px;
      height: 15px;

      &:nth-child(1) {
        padding-left: 0;
        border-left: none;
      }
    }
  }



  .fixed-box {
    background: #ffffff url("../../../../assets/ui/personal-header-bg.png") right 0 no-repeat;
    box-shadow: 0 6px 24px #E8EAF1;
    width: 100%;
    transition: 0.3s all;
  }
</style>

<template>
  <div class="layout-center">
    <div class="scaling-box">
      <CSBreadcrumb/>
      <headerBar @back="goBack" :page-type="pageType"  :active-index="keys" />
      <router-view />
      <!--  <component :is="key"/>-->
      <!--<action-buttons type="add" slot="right-btn" />-->
      <!--<old-man-info slot="content" />-->
      <!--</tag-shadow-card>-->
      <!--<tag-shadow-card title="带阴影的伸缩框">-->
      <!--12312312322123-->
      <!--</tag-shadow-card>-->
      <!-- <el-button type="primary">默认按钮</el-button> -->
    </div>
  </div>
</template>

<script>
import headerBar from './components/HeaderBar'
export default {
  name: 'personalCenter',
  components: {
    headerBar
  },
  computed: {
    keys() {
      return this.$route.path
    }
  },
  data() {
    return {
      pageTypeIndex: '0',
      pageType: [
        { routerName: '/personalCenter/userInfo', name: '个人信息' },
        { routerName: '/personalCenter/myTest', name: '我的考试' },
        { routerName: '/personalCenter/myCertificate', name: '我的证书' },
        { routerName: '/personalCenter/myQuestion', name: '我的问答' },
        { routerName: '/personalCenter/myIntegral', name: '我的积分' }
      ]
    }
  },
  methods: {
    goBack() {
      // console.log(this.$route.params.pageName)
      this.$router.push('/elderInformationSearch')
    }
  },
  created() {
  }
}
</script>

<style scoped>

</style>

<!--布局：流式布局-->
<template>
  <div class="waterfallFlow">
    <el-row :gutter="28">
      <el-col  :xs="24" :sm="24" :md="24" :lg="18" :xl="18" :span="18">
        <el-row :gutter="28">
          <el-col  :xs="24" :sm="24" :md="16" :lg="16" :xl="16" :span="16">
            <flexibleModuleBar class="swiper-box" height="640px">
              <div class="height-max" slot="content">
                <classicSwiper  />
<!--                <div v-for="(item, index) in slideData" :key="index">-->
<!--                  <sevenColorBar :item="item"/>-->
<!--                </div>-->
              </div>
            </flexibleModuleBar>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" :span="8">
            <flexibleModuleBar height="640px" title="通知公告">
              <div slot="content">
                <template v-for="(item, index) in 7">
                  <manyStateList border bold title="新闻11122" :key="index" time="2021-08-01" subTitle="简介去玩偶然哦球儿怄气无、哦"/>
                </template>
                <btnMore/>
              </div>
            </flexibleModuleBar>
          </el-col>
        </el-row>
        <el-row :gutter="28">
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :span="8">
            <flexibleModuleBar title="预留项目">
              <div slot="content">
                <template v-for="(item, index) in businessTrip">
                  <manyStateList :title="item.title" :time="item.time" :key="index"/>
                </template>
              </div>
            </flexibleModuleBar>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" :span="8">
            <flexibleModuleBar title="预留项目">
              <div slot="content">
                <template v-for="(item, index) in businessTrip">
                  <manyStateList :title="item.title" :time="item.time" :key="index"/>
                </template>
              </div>
            </flexibleModuleBar>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" :span="8">
            <flexibleModuleBar title="我的订单">
              <div slot="content">
                <template v-for="(item, index) in businessTrip">
                  <manyStateList :title="item.title" :time="item.time" :key="index"/>
                </template>
              </div>
            </flexibleModuleBar>
          </el-col>
        </el-row>
        <el-row :gutter="28">
          <el-col  :xs="24" :sm="8" :md="8" :lg="8" :xl="8" :span="8">
            <flexibleModuleBar draggable="true" title="资料下载">
              <div slot="content">
                <template v-for="(item, index) in businessTrip">
                  <manyStateList :title="item.title" :time="item.time" :key="index"/>
                </template>
              </div>
            </flexibleModuleBar>
          </el-col>
          <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16" :span="16">
            <flexibleModuleBar title="待定项目"/>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" :span="6">
        <flexibleModuleBar type="button" height="80px">
          <div class="flex-row item-center height-max" slot="content">
            <i class="staff staff-admin"></i>
            <div class="font-bold">进入管理端</div>
            <i class="staff staff-arror-right"></i>
          </div>
        </flexibleModuleBar>
        <flexibleModuleBar height="340px" title="近期使用">
          <div slot="content">
            <div class="flex-row flex-warp space-between">
              <template v-for="(list, listIndex) in iconItem">
                <btnGrid :key="listIndex" :list="list"></btnGrid>
              </template>
            </div>
          </div>
        </flexibleModuleBar>
        <flexibleModuleBar title="预留栏目"/>
        <flexibleModuleBar title="预留栏目"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import classicSwiper from './classicSwiper'

export default {
  name: "waterfallFlow",
  components: {
    classicSwiper,
    // sevenColorBar // 七色块
  },
  data() {
    return {
      businessTrip: [
        {title: '[测试] 长春(11月31)  到  北京(12-15) ', time: '15:30'},
        {title: '[测试] 西安大路分公司 ', time: '18:20'},
        {title: '[测试] 杭州销售总部 ', time: '22:30'},
        {title: '[测试] 北京(11月31)  到  长春(12-15) ', time: '19:22'},
        {title: '[测试] 长春(11月31)  到  北京(12-15) ', time: '23:11'},
        {title: '[测试] 人民广场中间的公园 ', time: '09:51'},
        {title: '[测试] 南湖湖中央 ', time: '15:32'},
        {title: '[测试] 长春(11月31)  到  北京(12-15) ', time: '12:44'},
      ],
      iconItem: [
        {icon: 'staff-approval', name: '授权产品', path: '/myOrder',},
        {icon: 'staff-approval', name: '学习天地', path: ''},
        {icon: 'staff-approval', name: '我的订单', path: ''},
        {icon: 'staff-approval', name: '个人中心', path: ''},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.waterfallFlow {
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.staff-admin {
  font-size: 34px;
  color: @Blue1;
  margin-right: 10px;
}

.staff-arror-right {
  margin-left: auto;
}
.swiper-box {
  //background:none;
  background: linear-gradient(180deg, #FFFFFF 0%, #EDEDED 65.62%, #eaeaea 82.29%, #EDEDED 100%), #FFFFFF!important;
}
/deep/   .swiper {
  padding-left: 0;

}
/deep/   .swiper-container {
  overflow: inherit;
  height: 600px!important;
  z-index: 0;
  overflow: hidden;
  filter: drop-shadow(0px 7px 11px rgba(0, 0, 0, 0.04));
  .swiper-scrollbar {
    bottom: 0% !important;
    width: 98% !important;
  }
}
/deep/   .swiper-slide {
  height: 92%;
}
</style>

<!--组件： 滑块布局-->
<template>
  <div class="classicSwiper">
    <swiper ref="mySwiper" class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in slideData" :key="index">
        <sevenColorBar :item="item"/>
      </swiper-slide>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "classicSwiper",
  props: {
    autoplay: {
      type: Object,
      default: () => {
        return {
          delay: 2500,
          disableOnInteraction: true
        }
      },
    }
  },
  data() {
    return {
      slideData: [
        {
          title: '预留栏目',
          value: '12.3',
          valFontSize: '12',
          unit: '（单位）',
          theme: { color: 'slide-bg-green', icon: 'staff-fingerprint'},
          prompt: { title: '提示标题', text: '提示内容群文件额群殴诶请我虐'},
          bar: [
            {name: '测试', num: '1'},
            {name: '缺测试勤', num: '1'},
            {name: '测试', num: '3'},
          ],
          list: [
            {left: '[测试] 12月4日 <b>测试</b>', right: '<b>-0.5</b>'},
            {left: '[测试] 12月3日 <b>测试</b>', right: ''},
            {left: '[测试] 12月3日 18：00 测试', right: ''},
            {left: '[测试] 12月3日 18：00 - 22：00 测试', right: ''}
          ],
          more: {text: '查看全部考勤', router: '/src/link'}
        },
        {
          title: '运单记录',
          value: '15',
          unit: '（个）',
          theme: {color: 'slide-bg-blue', icon: 'staff-attendance'},
          prompt: {title: '提示标题', text: '提示内容群文件额群殴诶请我虐'},
          bar: [
            {name: '驻场', num: '2'},
            {name: '洽谈', num: '3'},
          ],
          list: [
            {left: '[测试] <b>积分提取</b>(11月31)  到  <b>3000</b>(12-15) ', right: '15:33'},
            {left: '[测试] <b>积分提取</b>(11月31)  到  <b>1200</b>(12-15) ', right: '15:33'},
          ],
          more: {text: '查看全部出差', router: '/src/link'}
        },
        {
          title: '积分结算',
          valueHidden: true,
          value: '124239.00',
          unit: '（分）',
          sub: '肆仟陆佰捌拾玖元整',
          theme: {color: 'slide-bg-orange', icon: 'staff-wage'},
          prompt: {title: '提示标题', text: '提示内容群文件额群殴诶请我虐'},
          bar: [
            {name: '个人积分', num: '600'},
            {name: '平台积分', num: '0'}
          ],
          list: [
            {left: '[提取]  11月10 4689 元', right: '已到账'},
            {left: '[获取]  12月3日 4532 元 ', right: '异常'},
          ],
          more: {text: '查看更多薪酬统计', router: '/src/link'}
        },
        {
          title: '测试模块',
          value: '9',
          unit: '（项）',
          theme: {color: 'slide-bg-purple', icon: 'staff-to-do'},
          prompt: {title: '提示标题', text: '提示内容群文件额群殴诶请我虐'},
          bar: [
            {name: '测试', num: '1'},
            {name: '测试', num: '2'},
            {name: '测试', num: '3'}
          ],
          list: [
            {left: '[测试] 测试(11月31) 测试 测试(12-15) ', right: ''},
            {left: '[测试] 12月3日 测试', right: ''},
          ],
          more: {text: '查看全部待办', router: '/src/link'}
        },
        {
          title: '通知公告',
          value: '13',
          unit: '（未读）',
          theme: {color: 'slide-bg-pink', icon: 'staff-notice'},
          bar: [
            {name: '系统', num: '1'},
            {name: '通知', num: '2'},
            {name: '回执', num: '3'},
            {name: '右键', num: '3'}
          ],
          list: [
            {left: '[邮件] 系统通知2021年12月3日 ', right: '2021-12-25'},
            {left: '[通知 12月3日 最新消息通知', right: ''},
          ],
          more: {text: '查看全部公告', router: '/src/link'}
        },
        {
          title: '',
          value: '13',
          unit: '（未读）',
          theme: {color: 'slide-bg-emerald', icon: 'staff-notice'},
          bar: [
            {name: '系统', num: '1'},
            {name: '通知', num: '2'},
            {name: '回执', num: '3'},
            {name: '右键', num: '3'}
          ],
          list: [
            {left: '[邮件] 系统通知2021年12月3日 ', right: '2021-12-25'},
            {left: '[通知 12月3日 最新消息通知', right: ''},
          ],
          more: {text: '查看全部公告', router: '/src/link'}
        }
      ],
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        scrollbarHide: true, // 是否显示滚动条
        mousewheel: true,
        slidesPerView: "auto", // 是否弹性布局
        grabCursor: true, // 是否显示鼠标反馈
        autoplay: {},
        // spaceBetween: 60,
        // centeredSlides: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true, //滚动条是否自动隐藏。默认：false，不会自动隐藏。
          draggable: true, //该参数设置为true时允许拖动滚动条。
          snapOnRelease: true, //如果设置为false，释放滚动条时slide不会自动贴合。
          dragSize: "auto", //设置滚动条指示的尺寸。默认auto': 自动，或者设置num(px)。
        },
      }
    }
  },
  created() {
    this.swiperOption.autoplay = this.autoplay
  }
}
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  //height: 300px;
  z-index: -1;
  overflow: hidden;
  padding-left: 30px;
  box-sizing: border-box;

}

.swiper-container {
  overflow: inherit;
  height: calc(100vh - 200px);
  z-index: 0;
  overflow: hidden;
  filter: drop-shadow(0px 7px 11px rgba(0, 0, 0, 0.04));
}

.swiper-slide {
  width: 320px !important;
  height: 85%;
  background-color: #FFF;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 40px;
  -webkit-box-reflect: below 5px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(87%, transparent), to(rgba(250, 250, 250, 0.7)));
}

.swiper-scrollbar {
  position: absolute !important;
  bottom: 5% !important;
  right: 0;
  left: 0;
  width: 90% !important;
  height: 7px !important;
  margin: auto;
  background: rgba(0, 0, 0, 0.05) !important;
}


</style>
<style>
.classicSwiper .swiper-scrollbar-drag {
  background: rgba(0, 0, 0, 0.2) !important;
}
</style>

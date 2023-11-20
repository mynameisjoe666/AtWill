<!--页面：商品详细-->
<template>
  <div class="layout-center">
    <CSBreadcrumb/>
    <div class="box-shadow-bg padding-lg">
      <div class="flex-row">
        <div class="products-box">
          <!-- swiper1 -->
          <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
            <swiper-slide v-for="(item, index) in swiperData" :key="index" class="slide-1"><img :src="item.img" alt="">
            </swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          </swiper>
          <!-- swiper2 Thumbs -->
          <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
            <swiper-slide v-for="(item, index) in swiperData" :key="index" class="slide-1"><img
                src="@/assets/img/photo/products_img.png" alt=""></swiper-slide>
          </swiper>
        </div>
        <div class="products-info margin-left-base flex-1">
          <h6 class="font-18 font-bold">65/75/86会议触摸一体机智能触控多媒体教学视频电脑培训电子白板</h6>
          <div class="price padding-lg">
            <div class="flex-row flex-start">
              <div class="title">价格</div>
              <div class="font-28 blue1 font-bold"><span class="font-14">￥</span>1980 ~ <span class="font-14">￥</span>2646
              </div>
            </div>
            <div class="flex-row flex-start padding-top-lt">
              <div class="title">起发量</div>
              <div>15件起发</div>
            </div>
          </div>
          <div class="padding-lg border-bottom">
            <div class="flex-row">
              <div class="title padding-top-tiny">规格</div>
              <div>
                <el-radio-group v-model="radio3" size="small">
                  <el-radio v-for="item in 12" :key="item" :label="String(item)" border>{{ item }}<span class="active">123</span>
                  </el-radio>
                </el-radio-group>
              </div>
            </div>
          </div>
          <div class="padding-lg border-bottom">
            <div class="flex-row">
              <div class="title">规格</div>
              <div class="flex-row">
                <div class="margin-right-lt">65寸常规</div>
                <div>1000台库存</div>
              </div>
            </div>
          </div>
          <div class="padding-lg">
            <div class="flex-row">
              <div class="btn">立即订购</div> <div class="btn btn-border">加进货单</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="商品详情" name="first">
            <div class="border-bottom">
              <section>
                <title-bar class="padding-bottom-mini padding-top-base" title="重量体积" />
                <div class="flex-row padding-lg">
                  <div class="font-12 flex-row margin-right-max font-no-warp" v-for="item in 3" :key="item"><div class="margin-right-lt gray3">包裹重量</div><div>70kg</div></div>
                </div>
              </section>
              <section>
                <title-bar class="padding-bottom-mini padding-top-base" title="详细参数" />
                <div class="flex-row padding-lg flex-warp">
                  <div class="font-12 flex-row margin-right-max font-no-warp margin-bottom-base" v-for="item in 14" :key="item"><div class="margin-right-lt gray3">品牌</div><div>kgriotouch</div></div>
                </div>
              </section>
            </div>
            <div class="flex-column flex-center margin-top-base">
              <img width="80%" src="@/assets/img/photo/product_1.png" alt="">
            </div>
          </el-tab-pane>
          <el-tab-pane label="备选项" name="second">备选项</el-tab-pane>
          <el-tab-pane label="备选项目" name="third">备选项目</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsDetail",
  data() {
    return {
      activeName: 'first',
      radio3: '1',
      swiperOptionTop: {
        loop:true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop:true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      // 轮播图数据结构
      swiperData: [
        {
          img: require('@/assets/img/photo/products_img.png'),
          title: '商品名称',
        }, {
          img: require('@/assets/img/photo/products_img.png'),
          title: '商品名称',
        }, {
          img: require('@/assets/img/photo/products_img.png'),
          title: '商品名称',
        }, {
          img: require('@/assets/img/photo/products_img.png'),
          title: '商品名称',
        }, {
          img: require('@/assets/img/photo/products_img.png'),
          title: '商品名称',
        },
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper
      const swiperThumbs = this.$refs.swiperThumbs.swiper
      swiperTop.controller.control = swiperThumbs
      swiperThumbs.controller.control = swiperTop
    })
  }
}
</script>

<style lang="less" scoped>
.thumb-example {
  height: 480px;
  background-color: @Black;
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
    background-color: #000;

    img {
      width: 100%;
    }
  }


  &.gallery-top {
    height: 73%;
    width: 100%;
  }

  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  &.gallery-thumbs .swiper-slide {
    width: 70px;
    height: 70px;
    opacity: 0.4;
  }

  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}

.products-box {
  width: 450px;
  overflow: hidden;
}

.products-info {
  font-size: 14px;
}

.price {
  background: #F9F9FA;
  margin-top: 30px;
  width: 100%;
  box-sizing: border-box;
}

.title {
  width: 60px;
  text-align: left;
  margin-right: 10px;
}

/deep/   .el-radio {
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  margin-left: 0 !important;

  &.is-checked {
    .active {
      position: absolute;
      display: block;
      background-color: @Blue1;
      bottom: -15px;
      right: -15px;
      transform: rotate(46deg);
    }
  }
}

/deep/   .el-radio__input {
  display: none;
  position: relative;

  &.is-checked {
    display: none;
  }
}

/deep/   .el-radio {
  padding: 0px 20px !important;
  line-height: 32px !important;
}

/deep/   .el-radio__label {
  padding: 0 !important;

  .active {
    display: none;
  }
}

/deep/   .el-radio-button.el-radio-button–medium:focus {
  box-shadow: unset;
  background: #000;
}
.btn {
  background: linear-gradient(90deg, #2D5FE7 3.21%, #80A2FF 109.17%);
  border-radius: 10px;
  color: @White;
  font-size: 16px;
  padding: 13px 65px;
  font-weight: 700;
  margin-right: 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    background: linear-gradient(90deg, #254cb7 3.21%, #80A2FF 109.17%);
  }
}
.btn-border {
  background: #fff!important;
  border: #2D5FE7 solid 1px;
  box-sizing: border-box;
  color: #2D5FE7;
}
</style>

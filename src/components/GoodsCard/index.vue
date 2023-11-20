<!--组件：商品组件-->
<template>
  <div class="goodsCard">
    <ul>
      <li @click="handleClickEvent" class="good-card-list" v-for="(item, index) in 20" :key="index">
        <div>
          <div class="img-box"><img width="200" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt=""></div>
          <div class="ellipsis font-14 padding-top-lt">景尚 55/65/75/98/110寸大屏几千万二氢钾人气极旺</div>
          <div class="padding-top-lt"> <el-tag size="small">近期多次采购</el-tag></div>
          <div class="padding-top-lt flex-row space-between" ><strong class="flex-row blue1 "><em class="font-bold">￥</em><i class="font-bold">10000</i></strong><p class="font-12">成交：2w+</p></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "goodsCard",
  methods: {
    handleClickEvent() {
      this.$router.push({ path: "/goodsDetail" });
    }
  }
}
</script>

<style lang="less" scoped>
  .goodsCard {
    width: calc(100% + 25px);
    &:after {
      content: ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
  .good-card-list {
    width: 240px;
    float: left;
    margin-bottom: 20px;
    & > div {
      width: 220px;
      border: 1px solid #E7E7E7;
      cursor: pointer;
      transition: all 0.3s;
      padding:10px;
      box-sizing: border-box;
      .img-box {
        width: 200px;
        overflow: hidden;
        & > img {
          transition: all 0.3s;
        }
      }
      &:hover {
        box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.08);
         img {
          transform: scale(1.4);
        }
      }
    }
  }

</style>

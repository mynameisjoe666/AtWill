<!--组件:订单进度-->
<template>
  <div class="padding-lg">
    <div>
      <div class="step-box">
        <el-steps direction="vertical" :active="1">
          <el-step title="2022-08-18  18:00" description="周四：商品已经下单" ></el-step>
          <el-step title="2022-08-18  21:32" description="周五：业务人员正在选品" ></el-step>
          <el-step title="2022-08-18  18:00" description="周五：货品已清点完毕，正在联系分销商进行核验" ></el-step>
          <el-step title="2022-08-18  18:00" description="周五：货品箱单已发送至客户邮箱" ></el-step>
          <el-step title="2022-08-18  18:00" description="周五：客户反馈货品详单无误" ></el-step>
        </el-steps>
      </div>
    </div>
    <el-row :gutter="20">
      <el-col :span="20">
        <div class="padding-base">
          <el-descriptions  :labelStyle="{padding:'5px 0'}" :contentStyle="{padding:'5px 0'}" :column="2" title="运单信息">
            <el-descriptions-item content-class-name="black" label="运单号码">12312312312312412312123</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="物流公司">德邦物流</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="客服电话">1879874</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="供货商">提阿尼某某科技有限公司</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="发货地址">北京市海淀区大柳树路富海大厦2101室</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="收货地址">湖南省衡阳市某某街道某某地方 张沂水 187****1111</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-col>
      <el-col :span="4">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "orderProgress",
  data() {
    return {
      listLoading:false,
      tableData: [{
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        unitPrice: '1000.00',
        goodsNumber: '12',
        preferential: '33',
        orderState: '配送中',
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        unitPrice: '1000.00',
        goodsNumber: '12',
        preferential: '33',
        orderState: '配送中',
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        unitPrice: '1000.00',
        goodsNumber: '12',
        preferential: '33',
        orderState: '配送中',
      }]
    }
  },
  methods: {
    arraySpanMethod({columnIndex, rowIndex}) {
      let index = this.tableData.length
      if (columnIndex === 5) {
        if( rowIndex === 0 ) {
          return [index, 1]
        }else  {
          return [0, 0]
        }
      }
    },
    addClassName({columnIndex}) {
      if(columnIndex === 5) {
        return 'border-left'
      } else {
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .step-box {
    background: #F9F9F9;
    padding: 80px;
    height: 420px;
  }
</style>

<!--组件:订单信息-->
<template>
  <div class="padding-lg">
    <el-row :gutter="20">
      <el-col :span="20">
        <div class="padding-base">
          <el-descriptions  :labelStyle="{padding:'5px 0'}" :contentStyle="{padding:'5px 0'}" :column="2" title="合同信息">
            <el-descriptions-item content-class-name="black" label="客户名称">北京市武义科技有限公司</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="订单编码">15498798451515465487</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="运输方式">德邦物流</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="订单日期">2022-08-12</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="发货日期">2022-08-12</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="定金比率">10%</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="付款方式">现金支付</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="预付定金">10，000.00元</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="业务人员">王自行</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="付款金额">1，000，021.00元</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="发货地址">北京市海淀区大柳树路富海大厦2101室</el-descriptions-item>
            <el-descriptions-item content-class-name="black" label="订单备注">多麻多辣，不要香菜</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-col>
      <el-col :span="4">
        <el-button class="float-right" size="small" icon="staff staff-print margin-right-lt" type="primary" plain>打印订单</el-button>
      </el-col>
    </el-row>
    <div>
      <CS-table class="table-border-row-none table-no-hover" v-loading="listLoading" :data="tableData" row-key="id" default-expand-all
                :header-cell-style="{ background:'#F6F8FA', fonSize:'12px', color: '#373C4F'}"
                style="font-size: 12px"
                :span-method="arraySpanMethod"
                :cell-class-name="addClassName"
                header-row-class-name="row-style-gray"
                border
                :hasNO="false"
                :tree-props="{ children: 'children', hasChildren: ''}">
        <el-table-column width="400" align="left" label="产品名称"  >
          <template slot-scope="scope">
            <div class="padding-top-mini padding-bottom-mini">
              <img width="79" height="79" :src="scope.row.imgUrl" alt="">
              <div class="margin-left-min" style="display: inline-block; width: 270px">{{scope.row.productName}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="left" label="单价（元）" prop="unitPrice" />
        <el-table-column align="center" label="数量" prop="goodsNumber" />
        <el-table-column align="center" label="优惠（元）" prop="preferential" />
        <el-table-column align="center" label="商品状态" prop="orderState" />
        <el-table-column align="center" label="货品总价（元）" prop="scheme" >
          <template>
           <div>121231231233</div>
          </template>
        </el-table-column>
      </CS-table>
    </div>
    <el-row class="margin-top-base padding-top-base">
      <el-col :span="12"><div><el-button size="small" icon="staff staff-print margin-right-lt" type="primary" plain>打印订单</el-button></div></el-col>
      <el-col :span="12"><div class="text-right "><span class="font-14">实付款：</span><span class="blue1 font-bold font-24">7002500.00</span></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "orderInfo",
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

<style scoped>

</style>

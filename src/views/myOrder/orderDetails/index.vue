<!--页面：订单详细-->
<template>
  <div class="layout-center">
    <CSBreadcrumb/>
    <div class="box-shadow-bg">
      <div class="flex-row flex-center padding-max">
        <el-steps style="width: 80%" :active="1">
          <el-step title="提交订单" description="2022-10-12 17:07:18"></el-step>
          <el-step title="付款" description="2022-10-12 17:07:18"></el-step>
          <el-step title="平台商家发货" description="2022-10-12 17:07:18"></el-step>
          <el-step title="确认收货" description="2022-10-12 17:07:18"></el-step>
        </el-steps>
      </div>
      <div class="flex-row flex-center padding-max state-box" >
        <ul style="width: 80%">
          <li class="font-14">当前订单状态: <span class="font-16 font-bold">交易进行中</span></li>
          <li>1.如果没能收到货款，或货品出现任何问题，您可以联系平台商进行解决</li>
          <li>2.如果在货物运行途中有任何变动，需提前联系商家进行订单拦截及其他操作</li>
        </ul>
      </div>
    </div>
    <el-tabs class="margin-top-base" type="border-card">
      <el-tab-pane label="订单信息">
        <orderInfo/>
      </el-tab-pane>
      <el-tab-pane label="订单进度">
        <orderProgress />
      </el-tab-pane>
      <el-tab-pane label="合同附件">
        <orderContract />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import orderInfo from "@/views/myOrder/orderDetails/orderInfo";
import orderProgress from "@/views/myOrder/orderDetails/orderProgress";
import orderContract from "@/views/myOrder/orderDetails/orderContract";
export default {
  name: "index",
  components: {
    orderInfo,
    orderProgress,
    orderContract
  }
}
</script>

<style lang="less" scoped>
  .state-box {
    background-color: #F1F4F9;
    font-size: 12px;
    border-top:@Gray5 solid 1px;
    li {
      padding: 5px 0;
    }
  }
  /deep/   .el-step__title {
    font-size: 14px;
  }
  /deep/   .is-finish {
    font-weight: bold;
  }
  /deep/   .el-tabs--border-card>.el-tabs__header {
    background-color: @Gray6;
    border-bottom: 1px solid #E4E7ED;
    margin: 0;
  }
  /deep/   .el-tabs--border-card {
    box-shadow:none;
    border-radius: 5px;
    overflow: hidden;
  }
</style>

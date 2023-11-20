<!--页面：新建订单-->
<template>
  <div class="layout-center custom-theme">
    <!--    面包屑导航-->
    <CSBreadcrumb/>
    <div class="box-shadow-bg padding-base">
      <tag-card ref="tgacrad" title="订单信息">
        <el-form ref="elForm" :model="dataForm" :rules="rules" size="small" label-width="150px" label-position="right"
                 :disabled="!!isDetail">
          <el-row :gutter="35" class="custom-row">
            <el-col :span="12">
              <el-form-item label="客户名称" prop="customerName">
                <el-input v-model="dataForm.customerName" placeholder="请输入客户名称" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="订单编码" prop="orderCode">
                <el-input v-model="dataForm.orderCode" placeholder="请输入订单编码" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="运输方式" prop="transportation">
                <el-select v-model="dataForm.transportation" placeholder="请选择运输方式" clearable :style='{"width":"100%"}'
                           :disabled="actionType === 2"
                           filterable :multiple="false">
                  <el-option v-for="(item, index) in nationalityOptions" :key="index" :label="item.fullName"
                             :value="item.id" :disabled="item.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="订单日期" prop="orderDate">
                <el-date-picker v-model="dataForm.orderDate" placeholder="请选择订单日期" clearable :style='{"width":"100%"}'
                                :disabled="actionType === 2"
                                type="date" format="yyyy-MM-dd" value-format="timestamp">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="发货日期" prop="deliveryDate">
                <el-date-picker v-model="dataForm.deliveryDate"  placeholder="请选择发货日期" clearable :style='{"width":"100%"}'
                                :disabled="actionType === 2"
                                type="date" format="yyyy-MM-dd" value-format="timestamp">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="定金比率" prop="depositRate">
                <el-input-number class="el-input-left" v-model="dataForm.depositRate"  controls-position="right" @change="idcardNumChange"  :min="1" :max="10" :disabled="actionType === 2"
                          placeholder="请输入定金比率" clearable :style='{"width":"100%"}'>
                </el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="付款方式" prop="payment">
                <el-select v-model="dataForm.payment" placeholder="请选择付款方式" clearable :style='{"width":"100%"}'
                           :disabled="actionType === 2"
                           filterable :multiple="false">
                  <el-option v-for="(item, index) in nationalityOptions" :key="index" :label="item.fullName"
                             :value="item.id" :disabled="item.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="预付定金" prop="downPayment">
                <el-input-number class="el-input-left" v-model="dataForm.downPayment"  controls-position="right" @change="idcardNumChange"  :min="1" :max="10" :disabled="actionType === 2"
                                 placeholder="请输入预付定金" clearable :style='{"width":"100%"}'>
                </el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="业务人员" prop="businessPeople">
                <el-select v-model="dataForm.businessPeople" placeholder="请选择业务人员" clearable :style='{"width":"100%"}'
                           :disabled="actionType === 2"
                           filterable :multiple="false">
                  <el-option v-for="(item, index) in marriageInfoOptions" :key="index" :label="item.fullName"
                             :value="item.id" :disabled="item.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="付款金额" prop="orderNote">
                <el-input-number class="el-input-left" v-model="dataForm.paymentAmount"  controls-position="right" @change="idcardNumChange"  :min="1" :max="10" :disabled="actionType === 2"
                                 placeholder="请输入付款金额" clearable :style='{"width":"100%"}'>
                </el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="发货地址" prop="deliveryAddress">
                <CS-Address v-model="dataForm.deliveryAddress" @change="provinceChange" :disabled="actionType === 2"
                            placeholder="请选择发货地址" level=3>
                </CS-Address>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="订单备注" prop="orderNote">
                <el-input v-model="dataForm.orderNote" placeholder="请输入订单备注" type="textarea" :maxlength="500" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="上传附件">
                <el-upload class="upload-demo" multiple :limit="3" >
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </tag-card>
      <tag-card title="订单商品">
        <div class="margin-bottom-min flex-row flex-end"><el-button size="small" icon="el-icon-plus" type="primary" plain>新建订单</el-button></div>
        <CS-table v-loading="listLoading" :data="goodsData" row-key="id" default-expand-all
                  :header-cell-style="{ background:'#F6F8FA', fonSize:'12px', color: '#373C4F'}"
                  style="font-size: 12px"
                  show-summary
                  header-row-class-name="row-style-gray"
                  :border="false"
                  :tree-props="{ children: 'children', hasChildren: ''}">
          <el-table-column align="left" label="商品名称" prop="goodsName" />
          <el-table-column align="left" label="产品规格" prop="goodsSpec" />
          <el-table-column align="left" label="单位" prop="unit" />
          <el-table-column align="left" label="数量" prop="num" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  v-model="scope.row.num">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column align="left" label="单价" prop="price" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-yuan"
                  v-model="scope.row.price">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column align="left" label="金额" prop="amount" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-yuan"
                  v-model="scope.row.amount">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column align="left" label="折扣" prop="discount" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-zhe"
                  v-model="scope.row.discount">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column align="left" label="税率" prop="rate" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-bfb"
                  v-model="scope.row.rate">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column align="left" label="实际单价" prop="actualPrice" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-yuan"
                  v-model="scope.row.actualPrice">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button size="small" @click="handleLink(scope.row.id)" type="text">删除</el-button>
              <el-button size="small" @click="handleLink(scope.row.id)" type="text">修改</el-button>
            </template>
          </el-table-column>
        </CS-table>
      </tag-card>
      <tag-card title="收款计划">
        <div class="margin-bottom-min flex-row flex-end"><el-button size="small" icon="el-icon-plus" type="primary" plain>新增收款计划</el-button></div>
        <CS-table v-loading="listLoading" :data="paymentPlanData" row-key="id" default-expand-all
                  :header-cell-style="{ background:'#F6F8FA', fonSize:'12px', color: '#373C4F'}"
                  style="font-size: 12px"
                  show-summary
                  header-row-class-name="row-style-gray"
                  :border="false"
                  :tree-props="{ children: 'children', hasChildren: ''}">
          <el-table-column align="left" label="收款日期" prop="receiptDate" >
            <template slot-scope="scope">
              <el-date-picker v-model="scope.row.receiptDate"  placeholder="请选择订单日期" clearable :style='{"width":"100%"}'
                              :disabled="actionType === 2"
                              type="date" format="yyyy-MM-dd" value-format="timestamp">
              </el-date-picker>
            </template>
          </el-table-column>
          <el-table-column align="left" label="收款比率" prop="gatheringRate" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-yuan"
                  v-model="scope.row.gatheringRate">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column align="left" label="收款金额" prop="paymentAmount" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-yuan"
                  v-model="scope.row.paymentAmount">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column align="left" label="收款方式" prop="paymentMethods" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-zhe"
                  v-model="scope.row.paymentMethods">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column align="left" label="收款摘要" prop="receiving" >
            <template slot-scope="scope">
              <el-input
                  placeholder="0"
                  suffix-icon="unit-bfb"
                  v-model="scope.row.receiving">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button size="small" @click="handleLink(scope.row.id)" type="text">删除</el-button>
            </template>
          </el-table-column>
        </CS-table>
      </tag-card>
      <!-- 按钮组合 -->
      <div class="text-center padding-max">
        <el-button>返回</el-button>
        <el-button type="primary">提交审核</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "addOrder",
  data() {
    return {
      actionType: 1,
      searchData: '',
      tabActive: 0,
      listLoading: false,
      tabsList: ['全部订单', '待完成', '已完成', '已关闭'],
      rules: {
        customerName:
            [
              {
                required: true,
                message: '请输入客户名称',
                trigger: 'blur'
              }
            ], orderCode:
            [
              {
                required: true,
                message: '请输入订单编码',
                trigger: 'blur'
              }
            ], transportation:
            [
              {
                required: true,
                message: '请选择运输方式',
                trigger: 'change'
              }
            ], orderDate: [
              {
                required: true,
                message: '请选择订单日期',
                trigger: 'change'
              }
            ],deliveryDate: [
              {
                required: true,
                message: '请选择发货日期',
                trigger: 'change'
              }
            ],depositRate: [
              {
                required: true,
                message: '请输入定金比例',
                trigger: 'blur'
              }
            ],payment: [
              {
                required: true,
                message: '请选择付款方式',
                trigger: 'change'
              }
            ],downPayment: [
              {
                required: true,
                message: '请输入预付定金',
                trigger: 'blur'
              }
            ],businessPeople: [
              {
                required: true,
                message: '请选择业务人员',
                trigger: 'change'
              }
            ],paymentAmount: [
              {
                required: true,
                message: '请输入付款金额',
                trigger: 'blur'
              }
            ],deliveryAddress: [
              {
                required: true,
                message: '请选择发货地址',
                trigger: 'change'
              }
            ],orderNote: [
              {
                required: true,
                message: '请输入订单备注',
                trigger: 'blur'
              }
            ]
      },
      goodsData: [{
        goodsName: '小米心电仪',
        goodsSpec: '40x40   80x80   60x60   180x180',
        unit: '台',
        num: '0',
        price: '0',
        amount: '0',
        discount: '0',
        rate: '0',
        actualPrice: '0'
      },{
        goodsName: '小米心电仪',
        goodsSpec: '40x40   80x80   60x60   180x180',
        unit: '台',
        num: '0',
        price: '0',
        amount: '0',
        discount: '0',
        rate: '0',
        actualPrice: '0'
      },],
      paymentPlanData: [{
        receiptDate: '1662307200000',
        gatheringRate: '0',
        paymentAmount: '0',
        paymentMethods: '0',
        receiving: '摘要内容',
      },{
        receiptDate: '1662307200000',
        gatheringRate: '0',
        paymentAmount: '0',
        paymentMethods: '0',
        receiving: '摘要内容',
      },],
      dataForm: {
        id: 0,
        customerName: undefined, // 客户名称
        orderCode: undefined, // 订单编码
        transportation: undefined, // 运输方式
        orderDate: undefined, // 订单日期
        deliveryDate: undefined, // 发货日期
        depositRate: undefined, // 定金比例
        payment: undefined, // 付款方式
        downPayment: undefined, // 预付定金
        businessPeople: undefined, // 业务人员
        paymentAmount: undefined, // 付款金额
        deliveryAddress: undefined, // 发货地址
        orderNote: undefined, // 订单备注
        attachment: undefined, // 附件

      }
    }
  },
  computed: {
    orderState() {
      return function (state) {
        return state == 1 ? '订单完成' : '订单进行中'
      }
    }
  },
  methods: {
    handleLink() {
      // this.$router.push('/orderDetails');
    },
    idcardNumChange() {
      console.log(123)
    },
    provinceChange() {

    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>

/deep/  .el-table__header th {
  border: none;
}

</style>



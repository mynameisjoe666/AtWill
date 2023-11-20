<!--页面：积分提取-->
<template>
  <el-dialog title="积分提取" :close-on-click-modal="false" :visible.sync="visible" lock-scroll width="900px">
    <div class="custom-theme-row">
      <el-form class="margin-top-base" ref="elForm" :model="dataForm" :rules="rules" size="small" label-width="150px"
               label-position="right"
               :disabled="!!isDetail">
        <el-row :gutter="35" class="custom-row">
          <el-col :span="24">
            <el-form-item label="剩余积分" prop="productName">
              <el-tag class="margin-right-lt">总积分：38971</el-tag>
              <el-tag class="margin-right-lt" type="success">个人：30000</el-tag>
              <el-tag type="warning">企业：8971</el-tag>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="提取积分类型" prop="discount">
              <el-select v-model="dataForm.discount" placeholder="请选择提取积分类型" clearable :style='{"width":"100%"}'
                         :disabled="actionType === 2"
                         filterable :multiple="false">
                <el-option v-for="(item, index) in nationalityOptions" :key="index" :label="item.fullName"
                           :value="item.id" :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="扣税方式" prop="discount">
              <el-select v-model="dataForm.discount" placeholder="请选择扣税方式" clearable :style='{"width":"100%"}'
                         :disabled="actionType === 2"
                         filterable :multiple="false">
                <el-option v-for="(item, index) in nationalityOptions" :key="index" :label="item.fullName"
                           :value="item.id" :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="提取积分" prop="productName">
              <el-input v-model="dataForm.productName" placeholder="请输入提取积分" :maxlength="50" clearable
                        :disabled="actionType === 2"
                        :style='{"width":"100%"}'>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="提取方式" prop="discount">
              <el-select v-model="dataForm.discount" placeholder="请选择提取方式" clearable :style='{"width":"100%"}'
                         :disabled="actionType === 2"
                         filterable :multiple="false">
                <el-option v-for="(item, index) in nationalityOptions" :key="index" :label="item.fullName"
                           :value="item.id" :disabled="item.disabled"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注" prop="orderNote">
              <el-input v-model="dataForm.orderNote" placeholder="请输入备注" type="textarea" :maxlength="500" clearable
                        :disabled="actionType === 2"
                        :style='{"width":"100%"}'>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <!-- 按钮组合 -->
      <div class="text-center padding-max">
        <el-button>取消</el-button>
        <el-button type="primary">提取审核</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "extractIntegral",
  data() {
    return {
      visible: false,
      rules: {
        productName:
            [
              {
                required: true,
                message: '提取积分类型',
                trigger: 'change'
              }
            ], price:
            [
              {
                required: true,
                message: '扣税方式',
                trigger: 'change'
              }
            ], initialAmount:
            [
              {
                required: true,
                message: '提取积分',
                trigger: 'blur'
              },
            ], inventory:
            [
              {
                required: true,
                message: '提取方式',
                trigger: 'change'
              }
            ], address:
            [
              {
                required: true,
                message: '请输入备注',
                trigger: 'blur'
              }
            ]
      },
      dataForm: {
        id: 0,
        productName: undefined,
        price: undefined,
        initialAmount: 1,
        inventory: undefined,
        discount: undefined,
        onTheDate: undefined,
        figure: undefined,
        parameters: [{
          name: '品牌:', value: 'TCL'
        },
          {name: '规格:', value: '触控一体机'},
          {name: '类型:', value: '一体机触控'}
        ],
        graphic: '',
      }
    }
  },
  methods: {
    init() {
      this.visible = true
    }
  }
}
</script>

<style lang="less" scoped>
.salt-view {
  padding: 15px 10%;
  font-size: 14px;
  display: flex;

  .title {
    min-width: 140px;
    text-align: right;
    margin-right: 25px;
  }
}

.custom-theme-row {
  width: 60%;
  margin: 0 auto;
}
</style>

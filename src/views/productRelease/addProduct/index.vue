<!--页面：新增产品-->
<template>
  <div class="layout-center custom-theme">
    <CSBreadcrumb/>
    <div class="box-shadow-bg padding-base">
      <tag-card ref="tgacrad" title="产品信息">
        <el-form ref="elForm" :model="dataForm" :rules="rules" size="small" label-width="150px" label-position="right"
                 :disabled="!!isDetail">
          <el-row :gutter="35" class="custom-row">
            <el-col :span="12">
              <el-form-item label="产品名称" prop="productName">
                <el-input v-model="dataForm.productName" placeholder="请输入产品名称" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="单价（元）" prop="price">
                <el-input v-model="dataForm.price" placeholder="请输入单价" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="起拍量" prop="initialAmount">
                <el-input-number class="el-input-left" v-model="dataForm.initialAmount" controls-position="right" @change="idcardNumChange"
                                 :min="1" :max="10" :disabled="actionType === 2"
                                 placeholder="请输入起拍量" clearable :style='{"width":"100%"}'>
                </el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="库存" prop="inventory">
                <el-input-number class="el-input-left" v-model="dataForm.inventory" controls-position="right" @change="idcardNumChange"
                                 :min="1" :max="10" :disabled="actionType === 2"
                                 placeholder="请输入库存" clearable :style='{"width":"100%"}'>
                </el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="折扣活动" prop="discount">
                <el-select v-model="dataForm.discount" placeholder="请选择折扣活动" clearable :style='{"width":"100%"}'
                           :disabled="actionType === 2"
                           filterable :multiple="false">
                  <el-option v-for="(item, index) in nationalityOptions" :key="index" :label="item.fullName"
                             :value="item.id" :disabled="item.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="上架日期" prop="onTheDate">
                <el-date-picker v-model="dataForm.onTheDate" placeholder="请选择上架日期" clearable :style='{"width":"100%"}'
                                :disabled="actionType === 2"
                                type="date" format="yyyy-MM-dd" value-format="timestamp">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="轮播图" prop="figure">
                <el-upload class="upload-demo" multiple :limit="3">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </tag-card>
      <tag-card title="产品参数">
        <preview-list :parameters="dataForm.parameters"/>
      </tag-card>
      <tag-card title="内容编辑">
        <CS-Editor v-model="dataForm.graphic"/>
      </tag-card>
      <div class="text-center padding-max">
        <el-button>返回</el-button>
        <el-button type="primary">提交审核</el-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "addProduct",
  data() {
    return {
      actionType: 1,
      rules: {
        productName:
            [
              {
                required: true,
                message: '产品名称',
                trigger: 'blur'
              }
            ], price:
            [
              {
                required: true,
                message: '单价(元)',
                trigger: 'blur'
              }
            ], initialAmount:
            [
              {
                required: true,
                message: '起拍量',
                trigger: 'blur'
              },
            ], inventory:
            [
              {
                required: true,
                message: '库存',
                trigger: 'blur'
              }
            ], discount:
            [
              {
                required: true,
                message: '折扣活动',
                trigger: 'change'
              }
            ], onTheDate:
            [
              {
                required: true,
                message: '上架日期',
                trigger: 'change'
              }
            ], telNumber:
            [
              {
                required: true,
                message: '轮播图',
                trigger: 'change'
              }
            ],
        province:
            [
              {
                required: true,
                message: '请至少选择一个',
                trigger: 'change'
              }
            ],
        address:
            [
              {
                required: true,
                message: '请输入详细地址',
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
          name: '品牌:', value: 'TCL'},
          {name: '规格:', value: '触控一体机'},
          {name: '类型:', value: '一体机触控'}
        ],
        graphic: '',
      }
    }
  },
  methods: {
    handleLink() {
      // this.$router.push('/orderDetails');
    },
    provinceChange() {

    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>

</style>



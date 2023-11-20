<template>
  <div class="custom-theme">
    <tag-shadow-card title="基本信息">
      <div  slot="content">
        <el-form class="margin-top-base" ref="elForm" :model="dataForm" :rules="rules" size="small" label-width="150px" label-position="right"
                 :disabled="!!isDetail">
          <el-row :gutter="35" class="custom-row">
            <el-col :span="12">
              <el-form-item label="真实姓名" prop="productName">
                <el-input v-model="dataForm.productName" placeholder="请输入真实姓名" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="登陆账号" prop="productName">
                <el-input v-model="dataForm.productName" placeholder="请输入登陆账号" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="用户编号" prop="productName">
                <el-input v-model="dataForm.productName" placeholder="请输入用户编号" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="所属部门" prop="discount">
                <el-select v-model="dataForm.discount" placeholder="请选择所属部门" clearable :style='{"width":"100%"}'
                           :disabled="actionType === 2"
                           filterable :multiple="false">
                  <el-option v-for="(item, index) in nationalityOptions" :key="index" :label="item.fullName"
                             :value="item.id" :disabled="item.disabled"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="身份证号" prop="productName">
                <el-input v-model="dataForm.productName" placeholder="请输入身份证号" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="邮箱" prop="productName">
                <el-input v-model="dataForm.productName" placeholder="请输入邮箱" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="银行卡号" prop="productName">
                <el-input v-model="dataForm.productName" placeholder="请输入银行卡号" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="手机号码" prop="productName">
                <el-input v-model="dataForm.productName" placeholder="请输入手机号码" :maxlength="50" clearable
                          :disabled="actionType === 2"
                          :style='{"width":"100%"}'>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="人脸照片" prop="figure">
                <el-upload class="upload-demo" multiple :limit="3">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="text-center padding-max">
          <el-button type="primary">更新资料</el-button>
        </div>
      </div>
    </tag-shadow-card>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      rules: {
        productName:
            [
              {
                required: true,
                message: '真实姓名',
                trigger: 'blur'
              }
            ], price:
            [
              {
                required: true,
                message: '登陆账号',
                trigger: 'blur'
              }
            ], initialAmount:
            [
              {
                required: true,
                message: '用户编号',
                trigger: 'blur'
              },
            ], inventory:
            [
              {
                required: true,
                message: '所属部门',
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
  }
}
</script>

<style scoped>

</style>

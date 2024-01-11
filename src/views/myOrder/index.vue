<!--页面：我的订单-->
<template>
  <div class="layout-center">
    <CSBreadcrumb/>
    <div class="box-shadow-bg padding-lg">
      <div class="flex-row flex-warp">
        <template v-for="item in 300">
          <qrcode-vue
              :key="item"
              :size="size"
              :value="value+item"
              :logo="logo"
              :bgColor="bgColor"
              :fgColor="fgColor"
          ></qrcode-vue>
        </template>
      </div>
      <el-row :gutter="20">
        <el-col :span="10">
          <positionTabs class="margin-bottom-min" :tabs="tabsList" v-model="tabActive"/>
        </el-col>
        <el-col :span="8" :offset="6">
          <el-button @click="$router.push('/addOrder')" class="float-right" size="small" icon="el-icon-plus" type="primary" plain>新建订单</el-button>
        </el-col>
      </el-row>
      <CS-SearchBar class="margin-bottom-min" width="300" v-model="searchData" placeholder="请输入" />
      <div>
        <CS-table  v-for="(item, index) in tableData" :key="index" default-expand-all
                  :hasNO="false"
                  v-loading="listLoading"
                  :data="item" row-key="id"
                  class="margin-bottom-min table-no-hover"
                  :highlight-current-row="false"
                  :span-method="(params) => arraySpanMethod(params, item.length)"
                  :show-header="index == 0"
                  :header-cell-style="{ background:'#FBFBFB', fonSize:'12px', fontWeight:'700', color: '#000'}"
                  style="font-size: 12px"
                  header-row-class-name="row-style-gray"
                  :tree-props="{ children: 'children', hasChildren: ''}">
          <el-table-column width="400" align="left" label="货品">
            <template slot-scope="scope">
              <div>
                <template v-if="scope.row.productName">
                  <el-row type="flex" align="middle" justify="center" :gutter="30">
                    <el-col style="width: 400px; flex-shrink: 0;" > <img width="79" height="79" :src="scope.row.imgUrl" alt=""><div class="margin-left-min" style="display: inline-block; width: 270px">{{ scope.row.productName }} </div></el-col>
                    <el-col class="align-center" :span="10">{{scope.row.price}}</el-col>
                    <el-col class="align-center" :span="10">{{scope.row.itemNumber}}</el-col>
                  </el-row>
                </template>
                <template v-else>
                  <ul class="flex-row">
                    <li class="margin-right-base font-14 gray3">订货公司: {{ item[0].orderingCompany }}</li>
                    <li class="margin-right-base font-14 gray3">订单号: {{ item[0].orderNumber }}</li>
                    <li class="margin-right-base font-14 gray3">下单时间: {{ item[0].orderTime }}</li>
                  </ul>
                </template>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="发布价（元）" />
          <el-table-column align="center" label="数量">
            <template slot-scope="scope">
              <el-row type="flex" align="middle" justify="center" :gutter="30">
                <el-col class="align-center" :span="12">{{item[0].totalAmount}}</el-col>
                <el-col class="align-center" :span="12">{{orderState(item[0].orderState)}}</el-col>
                <el-col style="width: 120px; flex-shrink: 0" :span="4">
                  <el-button  type="primary" plain icon="el-icon-search" size="small" @click="handleLink(scope.row.id)" >查看</el-button>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
          <el-table-column align="center" label="总金额（元）" />
          <el-table-column align="center" label="订单状态" />
          <el-table-column align="center" label="交易操作" width="120">
          </el-table-column>
        </CS-table>
      </div>
      <el-pagination
          style="text-align: center; padding: 50px 0;"
          background
          border
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
    <!--    <div :key="index" v-for="(item, index) in 32">{{item}} {{ index }}</div>-->
  </div>
</template>

<script>
import qrcodeVue from 'qrcode-vue'
export default {
  name: "myOrder",
  data() {
    return {
      size: 80,
      bgColor: '#fff',
      fgColor: '#000',
      value: {a:1,b:2,c:3},
      logo: require('./WechatIMG1982.jpeg'),
      searchData: '',
      tabActive: 0,
      listLoading: false,
      tabsList: ['全部订单', '待完成', '已完成', '已关闭'],
      tableData: [[{
        orderingCompany: '长春市某某公司',
        orderNumber: 'GDW1548798798QW154',
        orderTime: '2022-12-08  22:07:16',
        totalAmount: '30,000.00',
        orderState: 0,
      }, {
        productName: '天创磁性钢化玻璃白板挂墙式书写板可擦会议室写字板儿童家用墙面玻璃大黑板教学培训看板涂鸦墙可定制 彩色 玻璃白板（不含安装） 60*90cm',
        imgUrl: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        itemNumber: 33,
        price: '10,000.00',
      }, ]]
    }
  },
  components: {
    qrcodeVue
  },
  computed:{
    orderState() {
      return function (state) {
        return state == 1 ? '订单完成' : '订单进行中'
      }
    }
  },
  methods: {
    handleLink() {
      this.$router.push('/orderDetails');
    },
    arraySpanMethod({rowIndex, columnIndex}, index) {
      console.log(index)
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return [1, 6]
        } else {
          if (columnIndex % 2 === 0) {
            return [1, 3]
          }
        }
      } else {
        if (columnIndex === 2) {
          if (rowIndex > 1) {
            return [0, 0]
          } else {
            return [index, 3]
          }
        } else {
          return [0, 0]
        }
      }
    }
  },
  mounted() {
    this.tableData[0].push(this.tableData[0][1])
    this.tableData.push(this.tableData[0])
    this.tableData[0].push(this.tableData[0][1])
    this.tableData.push(this.tableData[0])
    this.tableData.push(this.tableData[0])
    // this.tableData[0].push(this.tableData[0][1])
    // this.tableData[0].push(this.tableData[0][1])
    // console.log(this.$route)
  }
}
</script>

<style lang="less" scoped>

/deep/   .el-table__header th {
  border: none;
}
</style>



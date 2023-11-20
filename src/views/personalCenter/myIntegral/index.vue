<!--页面：我的积分-->
<template>
  <div>
    <tag-shadow-card title="积分明细">
      <div slot="content">
        <div class="margin-bottom-base">
          <el-row :gutter="20">
            <el-col :span="8"><div class="salt-view"><div class="title gray3">积分金额</div><div class="content red">1000</div></div></el-col>
            <el-col :span="8"><div class="salt-view"><div class="title gray3">已结算</div><div class="content">800</div></div></el-col>
            <el-col :span="8"><div class="salt-view"><div class="title gray3">未结算</div><div class="content">312</div></div></el-col>
          </el-row>
        </div>
      </div>
      <div slot="right-btn"><el-button @click="$refs.extractIntegral.init()"  type="primary" size="small">提取积分</el-button></div>
    </tag-shadow-card>
    <tag-shadow-card title="积分记录">
      <div slot="content">
        <div>
          <CS-table v-loading="listLoading" :data="tableData" row-key="id" default-expand-all
                    :header-cell-style="{ background:'#F6F8FA', fonSize:'12px', color: '#373C4F'}"
                    style="font-size: 12px"
                    header-row-class-name="row-style-gray"
                    :border="false"
                    :tree-props="{ children: 'children', hasChildren: ''}">
            <el-table-column align="left" label="获取来源"  >
              <template slot-scope="scope">
                <div class="padding-top-mini padding-bottom-mini">
                  <div class="font-bold">{{scope.row.source}}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column align="left" label="获得时间" prop="forTheTime" />
            <el-table-column width="200" align="left" label="积分数量" prop="integralNumber" >
              <template slot-scope="scope">
                 <div class="font-bold red">{{scope.row.integralNumber}}</div>
              </template>
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
    </tag-shadow-card>
   <extract-integral ref="extractIntegral" />
  </div>
</template>

<script>
import ExtractIntegral from "@/views/personalCenter/myIntegral/extractIntegral";
export default {
  name: "myIntegral",
  components: {ExtractIntegral},
  data() {
    return {
      tableData: [{
        source: '课程学习：学习视频',
        forTheTime: '2021-08-01',
        integralNumber: '+15',
      },{
        source: '课程学习：学习视频',
        forTheTime: '2021-08-01',
        integralNumber: '+15',
      },{
        source: '课程学习：学习视频',
        forTheTime: '2021-08-01',
        integralNumber: '+15',
      },{
        source: '课程学习：学习视频',
        forTheTime: '2021-08-01',
        integralNumber: '+15',
      },{
        source: '课程学习：学习视频',
        forTheTime: '2021-08-01',
        integralNumber: '+15',
      },{
        source: '课程学习：学习视频',
        forTheTime: '2021-08-01',
        integralNumber: '+15',
      },]
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
</style>

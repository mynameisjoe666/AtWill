<template>
  <div class="custom-theme">
    <tag-shadow-card title="考试列表">
      <div slot="content">
        <CS-SearchBar class="margin-bottom-min" width="300" v-model="searchData" placeholder="请输入" />
        <div>
          <CS-table v-loading="listLoading" :data="tableData" row-key="id" default-expand-all
                    :header-cell-style="{ background:'#F6F8FA', fonSize:'12px', color: '#373C4F'}"
                    style="font-size: 12px"
                    header-row-class-name="row-style-gray"
                    :border="false"
                    :tree-props="{ children: 'children', hasChildren: ''}">
            <el-table-column width="400" align="left" label="试卷名称"  >
              <template slot-scope="scope">
                <div class="padding-top-mini padding-bottom-mini">
                  <div class="margin-left-min" style="display: inline-block; width: 270px">{{scope.row.productName}}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column align="left" label="考试次数" prop="productSpec" />
            <el-table-column align="left" label="最高得分" prop="inventory" />
            <el-table-column align="left" label="最近考试" prop="sales" />
            <el-table-column align="left" label="是否通过" prop="shelf" >
              <template slot-scope="scope">
                <el-tag type="success">{{scope.row.shelf}}</el-tag>
              </template>

            </el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button size="small" @click="handleLink(scope.row.id)" type="text">查看错题</el-button>
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
  </div>
</template>

<script>
export default {
  name: "myTest",
  data() {
    return {
      tableData: [{
        productName: '综合题型考试',
        productSpec: '6',
        inventory: '100',
        sales: '2022-08-12  24:00:13',
        shelf: '已通过',
      }, {
        productName: '综合题型考试',
        productSpec: '6',
        inventory: '100',
        sales: '2022-08-12  24:00:13',
        shelf: '已通过',
      }, {
        productName: '综合题型考试',
        productSpec: '6',
        inventory: '100',
        sales: '2022-08-12  24:00:13',
        shelf: '已通过',
      }, {
        productName: '综合题型考试',
        productSpec: '6',
        inventory: '100',
        sales: '2022-08-12  24:00:13',
        shelf: '已通过',
      }, {
        productName: '综合题型考试',
        productSpec: '6',
        inventory: '100',
        sales: '2022-08-12  24:00:13',
        shelf: '已通过',
      }, {
        productName: '综合题型考试',
        productSpec: '6',
        inventory: '100',
        sales: '2022-08-12  24:00:13',
        shelf: '已通过',
      }, {
        productName: '综合题型考试',
        productSpec: '6',
        inventory: '100',
        sales: '2022-08-12  24:00:13',
        shelf: '已通过',
      }, ]
    }
  }
}
</script>

<style scoped>

</style>

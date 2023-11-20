<template>
  <div class="custom-theme">
    <tag-shadow-card title="问答列表">
      <div slot="content">
        <CS-SearchBar class="margin-bottom-min" width="300" v-model="searchData" placeholder="请输入" />
        <div>
          <CS-table v-loading="listLoading" :data="tableData" row-key="id" default-expand-all
                    :header-cell-style="{ background:'#F6F8FA', fonSize:'12px', color: '#373C4F'}"
                    style="font-size: 12px"
                    header-row-class-name="row-style-gray"
                    :border="false"
                    :tree-props="{ children: 'children', hasChildren: ''}">
            <el-table-column align="left" label="证书名称"  >
              <template slot-scope="scope">
                <div class="padding-top-mini padding-bottom-mini">
                  <div class="margin-left-min" style="display: inline-block; width: 270px">{{scope.row.productName}}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column align="left" label="证书编号" prop="productSpec" />
            <el-table-column align="left" label="获得时间" prop="inventory" />
            <el-table-column align="left" label="获得方式" prop="sales" />
            <el-table-column align="left" label="到期时间" prop="shelf" />
            <el-table-column align="left" label="颁发机构" prop="shelf2" />
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button size="small" @click="handleLink(scope.row.id)" type="text">查看</el-button>
                <el-button size="small" @click="handleLink(scope.row.id)" type="text">打印</el-button>
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
  name: "myCertificate",
  data() {
    return {
      tableData: [{
        productName: '专业经理人三级证书',
        productSpec: 'A0121A012144',
        inventory: '2021-08-01',
        sales: '在线考试',
        shelf: '2022-09-23 ',
        shelf2: '认证机构 ',
      },{
        productName: '专业经理人三级证书',
        productSpec: 'A0121A012144',
        inventory: '2021-08-01',
        sales: '在线考试',
        shelf: '2022-09-23 ',
        shelf2: '认证机构 ',
      },{
        productName: '专业经理人三级证书',
        productSpec: 'A0121A012144',
        inventory: '2021-08-01',
        sales: '在线考试',
        shelf: '2022-09-23 ',
        shelf2: '认证机构 ',
      },{
        productName: '专业经理人三级证书',
        productSpec: 'A0121A012144',
        inventory: '2021-08-01',
        sales: '在线考试',
        shelf: '2022-09-23 ',
        shelf2: '认证机构 ',
      },{
        productName: '专业经理人三级证书',
        productSpec: 'A0121A012144',
        inventory: '2021-08-01',
        sales: '在线考试',
        shelf: '2022-09-23 ',
        shelf2: '认证机构 ',
      },{
        productName: '专业经理人三级证书',
        productSpec: 'A0121A012144',
        inventory: '2021-08-01',
        sales: '在线考试',
        shelf: '2022-09-23 ',
        shelf2: '认证机构 ',
      },]
    }
  }
}
</script>

<style scoped>

</style>

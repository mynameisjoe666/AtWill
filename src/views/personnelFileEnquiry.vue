<template>
    <div id="personnelFileEnquiry" >
        <el-page-header style="background-color: #FFFFFF" class="header" @back="goBack" content="人员查询">
        </el-page-header>
        <el-row style="margin-top: 15px">
            <!--  左侧占比 6   -->
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <!--  选择年份 绑定值yaer   -->
                    <el-date-picker
                        v-model="year"
                        type="year"
                        @change="onSearch"
                        style="width: 100%"
                        placeholder="选择年">
                    </el-date-picker>
                    <!--  搜索栏   -->
                    <div class="search">
                        <el-input
                                placeholder="请输入拼音或姓名"
                                @keyup.enter.native="onSearch"
                                v-model="searchName">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                        <el-button style="margin-left: 10px" @click="onSearch" type="primary" icon="el-icon-search" size="mini">搜索</el-button>
                    </div>
                    <!--  自定义可滚动bar，交互：点击选中，输出序列为 userActive   -->
                    <div class="user-list">
                        <dl>
                            <dd @click="userActive = index" :class="{active:userActive == index}" v-for="(item, index) in userList" :key="index">
                                <el-image
                                    class="user-list-img"
                                    fit="cover"
                                    :src="item.userImg"
                                    >
                                </el-image>
                                <div class="text-box">
                                    <p>姓名: {{ item.name }} </p>
                                    <p>性别: {{ item.gender }} </p>
                                    <p>职位: {{ item.position}} </p>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <el-pagination
                    small
                    @current-change="handleSizeChange"
                    style="margin-top: 10px"
                    layout="prev, pager, next"
                    :total="100">
                </el-pagination>
            </el-col>
            <!--  右侧，占比为18   -->
            <el-col :span="18">
                <div class="grid-content bg-purple-light">
                    <!--  右侧顶部综合信息   -->
                    <div class="user-bar">
                        <!--  用户头像   -->
                        <div>
                            <el-image
                                class="user-img"
                                fit="cover"
                                :src="imgUrl"
                                :preview-src-list="[imgUrl]">
                            </el-image>
                        </div>
                        <!--   综合信息   -->
                        <div class="user-article">
                            <div class="user-name">刘志覃</div>
                            <dl>
                                <dd v-for="(item, index) in userData" :key="index"><div><span class="left-title">{{ item.title }}：</span><span class="blod">{{item.text}}</span></div></dd>
                            </dl>
                        </div>
                    </div>
                    <!--  折叠面板区域   -->
                    <el-collapse>
                        <el-collapse-item v-for="(item, index) in options" :key="index" :name="index">
                            <!--  标题插槽   -->
                            <template slot="title">
                                <i class="icon" :class="item.icon"></i><span style="font-size: 14px">{{item.title}}</span><cite style="font-size: 14px" class="badge">（ {{item.children.length}} ）</cite>
                            </template>
                            <!--  折叠内部表格   -->
                            <el-table
                                    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                                    :data="item.children"
                                    border
                                    style="width: 95%; margin: 35px auto; box-sizing: border-box">
                                <el-table-column
                                        prop="id"
                                        label="序号"
                                        width="60">
                                </el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="名称"
                                        width="300">
                                </el-table-column>
                                <el-table-column
                                        prop="describe"
                                        label="描述">
                                </el-table-column>
                                <el-table-column
                                        width="160"
                                        label="页数">
                                    <template slot-scope="scope">
                                        {{ scope.row.imgUrlList ? scope.row.imgUrlList.length : '0' }}
                                    </template>
                                </el-table-column>
                                <el-table-column
                                        fixed="right"
                                        width="140"
                                        label="操作">
                                    <template slot-scope="scope">
                                        <el-button :disabled="!scope.row.imgUrlList || scope.row.imgUrlList.length < 1" size="mini"  icon="el-icon-picture-outline" @click="handleClick(scope.row, scope.$index)">查看图片</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </el-col>
        </el-row>
        <!--  图片预览抽屉   -->
        <el-drawer
            title="图片预览"
            class="drawer"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose">
            <div class="img-list-box">
                <!--  图片预览循环   -->
                <el-image
                    v-for="(item, index) in imgViewArr"
                    :key="index"
                    fit="cover"
                    class="iphone-list"
                    :src="item"
                    :preview-src-list="imgViewArr">
                </el-image>
            </div>
        </el-drawer>
        <!--  返回顶部   -->
        <el-backtop target=".bg-purple-light"></el-backtop>
    </div>
</template>

<script>
    export default {
        name: "personnelFileEnquiry",
        data() {
            return {
                year: '', // 筛选所选年份
                searchName:'', // 搜索姓名
                drawer: false,  // 是否显示抽屉
                direction: 'rtl', // 排列方式
                imgViewArr: [], // 预览数组
                imgUrl: 'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg', // 用户头像
                userActive: 0, // 所选人序列 （可是使用该序列在userList中查询人员详细信息）
                userList: [
                    {name:'张三', gender: '男', id:'1', position:'商务', userImg:'https://img1.baidu.com/it/u=3303981320,1355171730&fm=26&fmt=auto'},
                    {name:'李四', gender: '男', id:'2', position:'运维', userImg:'https://img1.baidu.com/it/u=2788818474,2047444862&fm=26&fmt=auto'},
                    {name:'王五', gender: '男', id:'3', position:'ui设计', userImg:'https://img0.baidu.com/it/u=428862466,3046979750&fm=26&fmt=auto'},
                    {name:'李三思', gender: '男', id:'4', position:'平面设计', userImg:'https://img2.baidu.com/it/u=1496946415,925011589&fm=26&fmt=auto'},
                    {name:'江安庆', gender: '男', id:'5', position:'产品设计', userImg:'https://img2.baidu.com/it/u=1631547130,2106592521&fm=26&fmt=auto'},
                    {name:'王沪生', gender: '男', id:'6', position:'研发', userImg:'https://img0.baidu.com/it/u=456698862,3409920718&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'},
                    {name:'谭志鹏', gender: '男', id:'7', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'8', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'9', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'10', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'11', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'12', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'13', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'14', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'15', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'16', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'17', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'18', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'19', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'},
                    {name:'谭志鹏', gender: '男', id:'20', position:'技术总监', userImg:'http://111.26.181.228:10081/dev/api/Common/Image/annexpic/20210512_632eb4fd6b9243a8adfa173a537d3b49.jpg'}
                ],
                // 个人基本信息
                userData: [
                    {title:'性别', text:'男'},
                    {title:'民族', text:'汉族'},
                    {title:'证件类型', text:'身份证'},
                    {title:'证件号', text:'2203821198202135332'},
                    {title:'职位', text:'技术总监'},
                    {title:'学历', text:'本科'},
                    {title:'地址', text:'吉林市某某街12道某某'},
                    {title:'公司名称', text:'吉林省鑫应信息科1297技开发有限公司'},

                ],
                // 折叠面板数据选项
                options: [
                    {
                        title: '基本情况',
                        icon: 'el-icon-postcard',
                        children: [
                            {
                                name: '干部任免审批表',
                                describe: '这里是描述',
                                id: '1',
                                imgUrlList: ['https://img1.baidu.com/it/u=2788818474,2047444862&fm=26&fmt=auto','https://img0.baidu.com/it/u=428862466,3046979750&fm=26&fmt=auto']
                            }
                        ]
                    },
                    {
                        title: '履职情况',
                        icon: 'el-icon-notebook-2',
                        children: [
                            {
                                name: '个人述职述廉报告',
                                describe: '这里是描述',
                                id: '1'
                            },
                            {
                                name: '民主测评汇总表',
                                describe: '这里是描述',
                                id: '2'

                            },
                            {
                                name: '民主生活会发言材料',
                                describe: '这里是描述',
                                id: '3'
                            },
                            {
                                name: '行政执法、司法机关裁定裁决',
                                describe: '这里是描述',
                                id: '4'

                            },
                            {
                                name: '其他班子成员批评意见',
                                describe: '这里是描述',
                                id: '5'
                            },
                            {
                                name: '巡视巡察评价情况',
                                describe: '这里是描述',
                                id: '6'
                            }
                        ]
                    },
                    {
                        title: '接受审计情况',
                        icon: 'el-icon-collection',
                        children: [
                            {
                                name: '任期经济责任审计报告',
                                describe: '这里是描述',
                                id: '1'
                            },
                            {
                                name: '离任审计报告',
                                describe: '这里是描述',
                                id: '2'
                            }

                        ]
                    },
                    {
                        title: '谈话函询情况',
                        icon: 'el-icon-chat-dot-square',
                        children: [
                            {
                                name: '相关举报材料',
                                describe: '这里是描述',
                                id: '1'
                            },
                            {
                                name: '反映党员领导干部问题线索处置意见',
                                describe: '这里是描述',
                                id: '2'
                            },
                            {
                                name: '谈话函询情况报告',
                                describe: '这里是描述',
                                id: '3'
                            },
                            {
                                name: '谈话方案',
                                describe: '这里是描述',
                                id: '4'
                            },
                            {
                                name: '谈话记录',
                                describe: '这里是描述',
                                id: '5'
                            },
                            {
                                name: '本人书面说明',
                                describe: '这里是描述',
                                id: '6'
                            },
                            {
                                name: '函询通知书',
                                describe: '这里是描述',
                                id: '7'
                            }
                        ]
                    },
                    {
                        title: '考核奖惩情况',
                        icon: 'el-icon-edit-outline',
                        children: [
                            {
                                name: '党政纪处分决定',
                                describe: '这里是描述',
                                id: '1'
                            },
                            {
                                name: '组织处理文件',
                                describe: '这里是描述',
                                id: '2'
                            },
                            {
                                name: '公务员奖励审批表',
                                describe: '这里是描述',
                                id: '3'
                            },
                            {
                                name: '个人年度考核情况登记',
                                describe: '这里是描述',
                                id: '4'
                            }
                        ]
                    },
                    {
                        title: '其他情况',
                        icon: 'el-icon-files',
                        children: [
                            {
                                name: '党风廉政意见回复情况',
                                describe: '这里是描述',
                                id: '1'
                            }, {
                                name: '个人有关事项报告情况',
                                describe: '这里是描述',
                                id: '2'
                            }

                        ]
                    }
                ],

            }
        },
        methods: {
            // 头部返回事件,可以使用winsows go-1或者vue router方法
            goBack() {
                // 点击返回
            },
            onSearch() {
              alert(`执行内容搜索, 年份：${this.year} 名称内容${this.searchName}`)
            },
            // 打开抽屉
            handleClick(row, index) {
                this.imgViewArr = row.imgUrlList
                this.drawer = true
                console.log(row, index)
            },
            // 关闭抽屉
            handleClose(done) {
                done();
            },
            // 用户列表翻页
            handleSizeChange(size) {
                alert(`用户点击翻页${size}`)
            }
        },
        created() {
            // 初始化数据
            // 一个for循环
        }
    }
</script>

<style scoped>
    #personnelFileEnquiry {
        /*background-color: #ebeef5;*/
        height: 100vh;
    }
    .header {
        padding: 25px;
    }
    .grid-content {
        padding:0 24px;
    }
    .bg-purple {
        /*background-color: red;*/
    }
    .bg-purple-light {
        background-color: white;
        height: calc( 100vh - 90px );
        overflow-y: auto;
    }
    .search {
        display: flex;
        height: 40px;
        margin-top: 15px;
    }
    .icon {
        margin-right: 10px;
        font-size: 18px;
        display: inline-block;
        margin-top: -2px;
    }
    .badge {
        display: block;
        color: #AAAAAA;
        margin-left: 10px;
    }
    .user-bar {
        display: flex;
        margin-bottom: 20px;
    }
    .user-img {
        width: 110px; height: 110px;
        border-radius: 100%;
        flex-shrink: 0;
        border: #FFFFFF solid 3px;
        box-shadow: 0 4px 5px rgba(0,0,0, 0.12);
    }
    .user-article {
        margin-left: 30px;
        font-size: 14px;
        text-align: left;
        line-height: 34px;
    }
    .user-article dl {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin-right: 20px;
        flex-direction: column;
        height: 120px;
    }
    .left-title {
        min-width: 80px;
        display: block;
    }
    .user-name {
        font-size: 22px;
        margin-bottom: 15px;
    }
    .user-article dd div {
        display: flex;
        flex-direction: row;
        min-width: 53%;
        max-width: 100%;
        margin-right: 60px;
        /*background-color: red;*/
    }
    .blod {
        font-weight: bold;
    }
    .user-list {
        margin-top: 20px;
        height: calc(100vh - 250px);
        overflow-y: auto;
        overflow-x: hidden;
        border-radius: 5px;
    }
    .user-list dl {
        /*background-color:red;*/
        border: #DCDFE6 solid 1px;
        border-radius: 5px;

    }
    .user-list dl dd {
        padding: 12px 20px;
        display: flex;
        background-color: #f3f4f8;
        cursor: pointer;
        border-bottom: #ffffff solid 1px;
        transition: 0.3s all;
        box-shadow: inset -10px 0 10px rgba(0,0,0,0.05);

    }
    .user-list dl dd:hover, .user-list dl dd.active {
        background-color: #fff;
        transform: translateX(15px);
        z-index: 9999;
        box-shadow: inset -10px 0 5px rgba(0,0,0,0.0);
    }
    .user-list dl dd div.text-box {
        text-align: left;
        margin-left: 20px;

    }
    .user-list dl dd div.text-box p {
        font-size: 12px;
        line-height: 22px;
    }
    .user-list dl dd div.text-box p:nth-child(1) {
        font-size: 14px;
        font-weight: bold;
    }
    .user-list dl dd .user-list-img {
        width: 62px;
        height: 62px;
        border-radius: 100%;
        flex-shrink: 0;
        border: #ffffff solid 3px;
    }
    .drawer {
        text-align: left;
    }
    .img-list-box {
        width: 100%;
        padding: 10px;
    }
    .iphone-list {
        width: calc(33.33% - 20px);
        height: 140px;
        border-radius: 10px;
        margin: 8px 10px;
    }
</style>
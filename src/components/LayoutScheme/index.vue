<!--组件：布局方案按钮与弹窗-->
<template>
    <div>
        <div @click="centerDialogVisible = true" class="grid-content flex-row flex-center hover-opacity">
            <img src="@/assets/ui/layout.svg" alt="">
            布局方案
        </div>
        <el-dialog
            v-draggable
            title="布局方案"
            :lockScroll="false"
            :visible.sync="centerDialogVisible"
            width="34%"
            @closed="onClose"
            >
            <el-alert
                title="注意"
                type="warning"
                description="修改相关布局配置前，请先保存好未存储的操作与修改。"
                show-icon>
            </el-alert>
            <div>
                <div class="flex-row flex-center padding-max">
                    <el-radio-group style="display: flex" v-model="radioValue">
                        <el-radio  label="classic" border>
                            <div class="flex-column flex-center">
                                <i class="staff layout-icon staff-classic"></i>
                                <div class="font-12">经典布局</div>
                            </div>
                        </el-radio>
                        <el-radio  label="waterfallFlow" border>
                            <div class="flex-column flex-center">
                                <i class="staff layout-icon staff-waterfall-flow"></i>
                                <div class="font-12">流式布局</div>
                            </div>
                        </el-radio>
                    </el-radio-group>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="onClose('save')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "layoutScheme",
        props: {
            value: [String, Number]
        },
        data() {
            return {
                centerDialogVisible: false,
                radioValue: ''
            }
        },
        methods: {
            onClose(name) {
                this.centerDialogVisible = false
                if(name == 'save') {
                    this.$emit('input', this.radioValue)
                } else {
                    this.radioValue = this.value
                }
            }
        },
        created() {
            this.radioValue = this.value
        }
    }
</script>

<style lang="less" scoped>
    .grid-content {
        width: 93px;
        height: 29px;
        box-shadow: 0 7px 11px rgba(0, 0, 0, 0.04);
        background: #F3F3F3;
        border-radius: 3px;
        font-size: 12px;
        cursor: pointer;
        margin-right: 5px;

        img {
            margin-right: 10px;
        }
    }

    .layout-icon {
        font-size: 55px;
    }

    .el-radio.is-bordered {
        padding: 22px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

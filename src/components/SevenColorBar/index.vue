<!--组件: 七彩布局组件-->
<template>
    <div class="sevenColorBar">
        <div :class="`top-bar theme ${item.theme.color}`">
            <div :class="`icon-bg staff ${item.theme.icon}`"></div>
            <div class="flex-row space-between">
                <div class="title flex-row flex-center"><span>{{ item.title }}</span>
                    <div v-if="item.valueHidden" @click="show = !show" class="staff show-value"
                         :class="`${show ? 'staff-show':'staff-hide'}`"></div>
                </div>
                <div class="prompt staff staff-prompt hover-scale pointer"></div>
            </div>
            <div class="num-text">
                <span :style="{'font-size':`${size = item.value.length > maxSize ? fontSize - ( item.value.length * ratio ) : fontSize }px`}"
                      class="value">
                    <span v-if="item.valueHidden">{{!show ? item.value : '--.--' }}</span>
                    <span v-else>{{ item.value }}</span>
                </span><span>{{ item.unit }}</span>
            </div>
            <div v-if="item.sub" class="sub font-12">{{ item.sub }}</div>
            <div class="bar flex-row">
                <div v-for="(bar, barIndex) in item.bar" :key="barIndex">{{ bar.name }}: {{ bar.num }}</div>
            </div>
        </div>
        <div class="data-list">
            <dl>
                <dd v-for="(list, listIndex) in item.list" :key="listIndex" class="flex-row space-between">
                    <div v-html="list.left"></div>
                    <div v-html="list.right"></div>
                </dd>
            </dl>
        </div>
        <div class="btn-arror-right hover-scale flex-row flex-center">
            {{ item.more.text}}
            <i class="staff staff-arror-right-rounded font-12"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SevenColorBar",
        props: {
            item: [Object] // 传入的数据item
        },
        data() {
            return {
                fontSize: 72, // 字号基础
                ratio: 2.4, // 自动缩放的倍率
                maxSize: 4, // 超出的最大字数
                show: true // 是否显示隐藏显示
            }
        }
    }
</script>

<style scoped lang="less">
    .sevenColorBar {
      background-color: #FFF;
      border-radius: 10px;
      overflow: hidden;
    }
    .top-bar {
        position: relative;
        padding: 20px;
        height: 294px;
        padding-bottom: 85px;
        box-sizing: border-box;
        color: @White;
        text-align: left;

        &:before {
            position: absolute;
            left: 0;
            bottom: 0;
            content: '';
            display: block;
            width: 100%;
            height: 85px;
            background: url("../../assets/ui/bar-bg.svg") 0 no-repeat;
            background-size: 100% 100%;
            z-index: 1;
        }

        .title {
            font-size: 14px;
        }

        .num-text {
            line-height: 80px;
            padding-top: 10px;
            display: table-cell; /*按照单元格的样式显示元素*/
            vertical-align: bottom; /*底对齐*/
            text-wrap: none;
            white-space: nowrap;
            font-family: "PingFang SC", '黑体', 'Arial';

            .value {
                font-size: 72px;
                font-weight: 800;
                letter-spacing: -2px;
            }
        }

        .bar {
            font-size: 12px;

            div {
                margin-right: 30px;
            }
        }

        .sub {
            margin-bottom: 15px;
            color: #FFD19A;
            font-weight: 700;
        }

    }

    .data-list {
        z-index: 2;
        position: relative;
        margin-top: -30px;

        dl {
            dd {
                padding: 8px 20px;
                font-size: 12px;
                color: @Black;
            }
        }
    }

    .btn-arror-right {
        font-size: 12px;
        color: @Gray4;
        position: absolute;
        left: 0;
        bottom: 20px;
        right: 0;
        margin: auto;
        cursor: pointer;
        text-align: center;
        & > i {
            margin-left: 5px;
        }
    }

    .theme {
        &.slide-bg-green {
            background: linear-gradient(270deg, #518d27 39.35%, #75a33e 146.22%);
        }

        &.slide-bg-blue {
            background: linear-gradient(270deg, #2D5FE7 39.35%, #527EF4 146.22%);
        }

        &.slide-bg-orange {
            background: linear-gradient(270deg, #E7912D 39.35%, #FF7272 146.22%);
        }

        &.slide-bg-purple {
            background: linear-gradient(270deg, #6C6AEB 39.35%, #AAA8FF 146.22%);
        }

        &.slide-bg-pink {
            background: linear-gradient(270deg, #D37272 39.35%, #EE9898 146.22%);
        }

        &.slide-bg-emerald {
            background: linear-gradient(270deg, #36b189 39.35%, #66d0ba 146.22%);
        }

        & > .icon-bg {
            position: absolute;
            right: 0;
            top: 0;
            content: '';
            display: block;
            width: 100%;
            height: 85px;
            background-size: 100% 100%;
        }

        .staff-fingerprint {
            font-size: 300px;
            right: -110px;
            top: -20px;
            opacity: 0.1;
        }

        .staff-attendance {
            font-size: 230px;
            right: -110px;
            top: -20px;
            opacity: 0.1;
        }

        .staff-wage {
            font-size: 240px;
            right: -120px;
            top: -10px;
            opacity: 0.1;
        }

        .staff-to-do {
            font-size: 240px;
            right: -140px;
            top: -10px;
            opacity: 0.1;
        }

        .staff-notice {
            font-size: 240px;
            right: -140px;
            top: -10px;
            opacity: 0.1;
        }
    }

    .show-value {
        font-size: 28px;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0);
        width: 30px;
        position: absolute;
        margin-left: 130px;
    }
</style>

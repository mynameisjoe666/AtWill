<!--组件：常规列表-->
<template>
    <dl class="sub-list font-14" :class="{ border:border }">
        <dd>
            <div class="flex-row space-between">
                <div class="title gray1" :class="{'font-bold': bold}">{{ title }}</div>
                <cite v-if="time" class="gray4 font-14">{{ time }}</cite>
                <cite v-else>下载</cite>
            </div>
            <div v-if="subTitle" class="gray3 sub-title font-12">{{ subTitle }}</div>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: "ManyStateList",
        props: {
            title: [String],
            subTitle: [String],
            time: [String],
            border: [Boolean],
            bold: [Boolean]
        }
    }
</script>

<style scoped lang="less">
    .sub-list {
        cursor: pointer;
        padding: 8px 0;
        &:hover {
            * {
                color: @Blue1;
            }
        }
        &:nth-child(1) {
            padding-top: 0;
        }
    }
    .title {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 70%;
    }
    .border {
        border-bottom: @Gray5 dashed 1px;
        padding: 12px 0;
    }
    .sub-title {
        margin-top: 2px;
    }
</style>

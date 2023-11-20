<template>
    <div :style="{margin: margin}" class="icon-item flex-column flex-center hover-scale transition" >
        <div class="icon-box flex-row flex-center">
            <i class="icon staff" :class="list.icon"></i>
        </div>
        <div class="icon-name">{{ list.name }}</div>
    </div>
</template>

<script>
    export default {
        name: "BtnGrid",
        props: {
            list: [Object],
            margin: {
                type: String,
                default: '0px'
            }
        }
    }
</script>

<style scoped lang="less">
    .icon-item {
        width: 95px;
        padding: 25px 5px;
        cursor: pointer;
        box-sizing: border-box;
    .icon-box {
        width: 46px;
        height: 46px;
        border-radius: 6px;
    }
    &:nth-child(1) {
    .icon-box {
        background-color: #AAC474;
    }
    }
    &:nth-child(2) {
    .icon-box {
        background-color: #C47474;
    }
    }
    &:nth-child(3) {
    .icon-box {
        background-color: #74C486;
    }
    }
    &:nth-child(4) {
    .icon-box {
        background-color: #C49A74;
    }
    }
    &:nth-child(5) {
    .icon-box {
        background-color: #7477C4;
    }
    }
    &:nth-child(6) {
    .icon-box {
        background-color: #a874c4;
    }
    }
    &:nth-child(7) {
    .icon-box {
        background-color: #6ec481;
    }
    }
    &:nth-child(8) {
    .icon-box {
        background-color: #b45e8d;
    }
    }
    }
    .icon {
        font-size: 26px;
        color: @White;
    }

    .icon-name {
        font-size: 12px;
        margin-top: 15px;
        width: 95px;
        color: @Black;
        font-weight: 300;
        overflow: hidden;
        text-align: center;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>

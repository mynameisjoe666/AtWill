<!--组件:灵活块容器-->
<template>
    <div :style="{height: height}" class="block-bar" :class="{button: type == 'button'}">
        <div v-if="title" class="flex-row space-between title-bar"><div class="font-16">{{ title }}</div><div class="staff staff-more"></div></div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "flexibleModuleBar",
        props: {
            height: {
                type: String,
                default: '565px'
            },
            // 可选：container, button
            type: {
                type: String,
                default: 'container'
            },
            title: [String]
        }
    }
</script>

<style lang="less" scoped>
    .block-bar {
        width: 100%;
        background: @White;
        box-shadow: 0 7px 11px rgba(0, 0, 0, 0.04);
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
        margin-bottom: 28px;
        display: flex;
        flex-direction: column;
        transition: 0.3s all;
        &:hover {
            box-shadow: 0 7px 11px rgba(0, 0, 0, 0.14);
        }
    }
    .button {
        cursor: pointer;
        &:hover {
            transform: translateY(-2px);
            background-color: #f6f6f6;
            box-shadow: 0 7px 11px rgba(0, 0, 0, 0.14);
        }
        &:active {
            transition: 0s all;
            transform: scale(0.98);
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.14);
        }

    }
    .content {
        flex: 1;
    }
    .staff-more {
        font-size: 32px;
    }
    .title-bar {
        line-height: 20px;
        margin-bottom: 20px;
    }
</style>
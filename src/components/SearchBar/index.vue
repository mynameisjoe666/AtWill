<template>
    <div class="min search-bar flex-row space-between">
        <i class="staff staff-sherch"></i>
        <input @keyup.enter="submit" v-model="searchText" :placeholder="placeholder" type="text">
        <button @click="submit" class="btn">搜索</button>
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: '输入关键字'
            }
        },
        data() {
            return {
                searchText: '',
            }
        },
        methods: {
            submit() {
                // alert(this.searchText)
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-bar {
        background-color: #fff;
        padding: 4px;
        box-sizing: border-box;
        width: 100%;
        .staff-sherch {
            color: @Blue1;
            font-size: 24px;
            margin-left: 10px;
        }
        .btn {
            border-radius: 100px;
            border: none;
            background-color: @Blue1;
            color: @White;
            height: 100%;
            width: 100px;
            box-sizing: border-box;
            cursor: pointer;
            transition: 0.3s all;
            &:hover {
                background-color: @Blue1Hover;
            }
            &:active {
                background-color: @Blue1Active;
                transition: 0s all;
                transform: scale(0.97);
            }
        }
        input {
            flex: 1;
            margin: 0 10px;
            border: none;
            font-size: 14px;
        }
        &.min {
            height: 42px;
        }
    }



    .search-bar {
        border-radius: 100px;
    }
</style>

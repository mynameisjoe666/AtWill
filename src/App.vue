<template>
    <div id="app">
        <router-view />

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>

<style lang="less">
    // css 初始化
    @import "./assets/css/default.css";
    // 原子css
    @import "./assets/css/atomic-model.less";
    // 独有字体图标
    @import "./assets/font/staff-icon.css";
    // 共用字体图标
    @import "./assets/font/iconfont.css";

    body,
    html,
    #app {
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 100vh;
        min-width: 1366px;
    }
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        width: 100%;
        min-height: 100vh;
    }
    .bottom-nav {
      padding: 40px;
      background-color: #f5f5f5;
      text-align: center;
    }
</style>

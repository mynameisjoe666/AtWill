<template>
  <div id="layout">
    <router-view/>
    <top-navigation type="default"/>
    <div class="bottom-nav">
      Copyright © 2022 addpro.com All Rights Reserved | 吉ICP备 222333-2
    </div>
  </div>
</template>

<style lang="less">
#layout {
  text-align: left;
  color: #2c3e50;
  padding-top: 55px;
  padding-bottom: 55px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #d0d0d0 1.44%, #EDEDED 20.53%, #EDEDED 30.36%, #EDEDED 88.19%), #C4C4C4;
}
</style>

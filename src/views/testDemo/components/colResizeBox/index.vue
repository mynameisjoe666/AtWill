<template>
  <div :style=" 'width:'+ width+'px' " class="col-resize-box">
    <div>
      <slot></slot>
    </div>
    <div ref="operationBar" class="operation-bar"></div>
  </div>
</template>

<script>
export default {
  name: "colResizeBox",
  data() {
    return {
      width: 600,
    }
  },
  mounted() {
    let startX = 0
    let start = false
    // document.querySelector('iframe').style.cssText = 'pointer-events:none;'
    this.$refs.operationBar.addEventListener('mousedown', e=> {
      document.querySelector('iframe').style.cssText = 'pointer-events:none;'
      startX = e.x - this.width
      start = true
    })
    window.addEventListener('mousemove', e=> {
      if(start){
        this.width = e.pageX - startX
      }
    })
    window.addEventListener('mouseup', ()=> {
      document.querySelector('iframe').style.cssText = ''
      start = false
      const event = new Event('resize')
      window.dispatchEvent(event)
    })
  }
}
</script>

<style lang="less" scoped>
.col-resize-box {
  position: relative;
  height: 100%;
  min-width: 160px;
  max-width: calc(100vw - 100px);
}
.operation-bar {
  position: absolute;
  top: 0px;
  width: 5px;
  height: 100%;
  right: -5px;
  background-color: #bbbbbb;
  z-index: 8;
  cursor: col-resize;
  &:hover {
    background-color: #a9a9a9;
   }
}
</style>

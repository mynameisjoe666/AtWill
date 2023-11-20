<template>
  <div id="iframeWarp"></div>
</template>

<script>
export default {
  name: "index",
  props: {
    doc: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: '1'
    },
  },
  data() {
    return {
      timeOut: null,
      renderStart:false
    }
  },
  watch: {
    doc() {
      if(this.renderStart) this.debounce(this.createHtml, 2000)
      else this.renderStart = true
    }
  },
  methods: {
    debounce(func, wait) {
      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(func, wait)
    },
    createHtml() {
      const iframe = document.createElement("iframe");
      const iframeWarp =  document.getElementById("iframeWarp")
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("id", "iframeResult");
      iframeWarp.innerHTML = "";
      iframeWarp.appendChild(iframe);
      const iframeDoc = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
      iframeDoc.document.open();
      iframeDoc.document.write(this.doc);
      iframeDoc.document.close();
      this.$notify({
        title: '修改完成',
        message: '代码已更新到模板',
        type: 'success'
      });
    },
    getFrameDoc(id) {
      const frameDom = document.querySelector(id)
      frameDom.src = `/doc/${this.src}.html`
      frameDom.addEventListener('load', ()=> {
        const dom = frameDom.contentDocument,body = dom.body
        const frameCssInnerHTML = dom.head.querySelector('style')
        const frameCss = frameCssInnerHTML ? frameCssInnerHTML.innerHTML : ''
        const frameScript = body.querySelectorAll('script')
        let frameScriptArr = ''
        let frameBodyScript = ''
        if(frameScript) {
          for(let i = 0; i < frameScript.length; i++) {
            if(frameScript[i].src) {
              frameBodyScript += `${'<'+'script src='+'"'+frameScript[i].src +'"'+' ></'+'script' +'>'}`
            } else  {
              frameScriptArr += frameScript[i].innerHTML
            }
            frameScript[i].remove()
          }
        }
        let frameBody = frameBodyScript + body.innerHTML
        this.$emit('frameLoad',{frameScript:frameScriptArr, frameBody:frameBody, frameCss:frameCss, dom:dom, frameSrc: frameDom.src})
      })
    }
  },
  mounted() {
    this.createHtml()
    this.getFrameDoc('#iframeResult')
  }
}
</script>

<style scoped>
#iframeWarp {
  width: 100%;
  height: 100%;
  /*pointer-events:none;*/
}
/deep/  iframe {
  width: 100%;
  height: 100%;
  border: 0 none;
  display: inline;
}

</style>

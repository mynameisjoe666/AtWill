<template>
  <div>
    <div class="row-bg flex-row">
      <div class="left-menu" >
        <ul class="top-button">
          <li @click="handleMenuKey(type)" :class="{hide:menuKey.indexOf(type) !== -1}" v-for="type in Object.keys(editType)" :key="type">{{type}}</li>
        </ul>
      </div>
      <div>
        <colResizeBox>
          <div v-if="editType.html || editType.css || editType.js" class="edit-box">
            <div v-for="type in Object.keys(editType)" :key="type" v-show="menuKey.indexOf(type) === -1" class="edit-item" >
              <aceEdutir :mode="type === 'js' ? 'javascript' : type " v-model="editType[type]"  />
            </div>
          </div>
        </colResizeBox>
      </div>
      <div class="flex-1">
        <div class="iframe-box">
          <iFrameBox :src="$route.query.demo" @frameLoad="onFrameLoad" :doc="doc" />
        </div>
      </div>
    </div>
    <div class="bottom-menu flex-row">
      <div>共33行代码</div>
      <div class="flex-right">预览地址: {{ frameSrc }}</div>
    </div>
  </div>
</template>

<script>
import colResizeBox from "../components/colResizeBox";
import iFrameBox from '../components/iFrameBox' // 创建执行结果
import aceEdutir from '../components/aceEdutir' // 编辑器导入
export default {
  name: "codeEdit",
  components: {
    iFrameBox,
    aceEdutir,
    colResizeBox
  },
  data() {
    return {
      frameSrc: '',
      myEvent: new Event('resize'),
      menuKey: [],
      editType: {
        html:'',
        css:'',
        js:'',
      },
      doc: '123123',
    }
  },
  watch: {
    editType: {
     handler() {
       this.open()
     },
     deep: true
    }
  },
  methods: {
    handleMenuKey(key) {
      if(this.menuKey.indexOf(key) !== -1) {
        let index = this.menuKey.findIndex(item => {
          return item == key
        })
        this.menuKey.splice(index, 1)
      } else if(this.menuKey.length < 2) {
        this.menuKey.push(key)
      }
      this.$nextTick(()=> {
        window.dispatchEvent(this.myEvent)
      })
    },
    open() {
      const {html: htmlContext, css: cssContext, js:jsContext } = this.$data.editType
      let doc = `<html><head><style>${cssContext}</style></head>${htmlContext}${'<'+'script'+'>'+jsContext+'</'+'script' +'>'}<body></body></html>`
      this.doc = doc
    },
    onFrameLoad(obj) {
      this.editType.html = obj.frameBody
      this.editType.css = obj.frameCss
      this.editType.js = obj.frameScript
      this.frameSrc = obj.frameSrc
    }
  },
  mounted() {
    // this.onChangeHtml()

  }
}
</script>

<style lang="less" scoped>
  /deep/  .edit-box {
    height: calc(100vh - 85px);
    display: flex;
    flex-direction: column;
  }
  .edit-item {
    flex: 1;
    border-bottom: #dcdcdc solid 2px;
  }
  .iframe-box {
    width: 100%;
    height: 100%;
  }

  .left-menu {
    width: 55px;
    flex-shrink: 0;
    background-color: #ffffff;
  }
  .top-button {
    position: fixed;
    li {
      background-color: #fff;
      padding: 10px;
      cursor: pointer;
      font-size: 14px;
      width: 100%;
      border-bottom: #e3e3e3 solid 1px;
      &:hover {
        background-color: #e7e7e7;
      }
      &.hide {
        background-color: #dedede;
        color: #a8a8a8;
      }
    }
  }
  .bottom-menu {
    width: calc(100% - 55px);
    height: 30px;
    float: right;
    background-color: #f1f1f1;
    font-size: 12px;
    line-height: 30px;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>

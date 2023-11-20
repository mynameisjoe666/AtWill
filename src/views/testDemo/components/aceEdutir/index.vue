<template>
  <div :style="{height:height}" class="container">
    <div ref="ace" class="ace-editor"></div>
    <div class="mode-box">{{mode}}</div>
  </div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver' // 在 webpack 环境中使用必须要导入
// 根据自己的需求按需引入
import 'ace-builds/src-noconflict/ext-language_tools'
// import 'ace-builds/src-noconflict/theme-dracula' // 主题
// import 'ace-builds/src-min-noconflict/theme-kuroir'
import 'ace-builds/src-noconflict/mode-html' // 语言模式
import 'ace-builds/src-noconflict/mode-json' // 语言模式
import 'ace-builds/src-noconflict/mode-javascript' // 语言模式
import beautify from 'ace-builds/src-noconflict/ext-beautify' //  格式化插件
// import 'ace-builds/src-noconflict/snippets/html' //代码提示
export default {
  name: "aceEdutir",
  props: {
    value: [String],
    mode: {
      type: String,
      default: 'html'
    },
    height: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      aceEditor: null,
    }
  },
  methods: {
    initEditor() {
      // 初始化
      this.aceEditor = ace.edit(this.$refs.ace, {
        // maxLines: 20, // 最大行数，超过会自动出现滚动条
        // minLines: 20, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
        fontSize: 14, // 编辑器内字体大小
        // theme: 'ace/theme/terminal', // 主题
        mode: `ace/mode/${this.mode}`, // 默认设置的语言模式
        tabSize: 4, // 制表符设置为 4 个空格大小
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        autoScrollEditorIntoView: true,
        highlightActiveLine:false, // 不显示行标记
        showPrintMargin: false // 隐藏打印线
      })
      this.aceEditor.getSession().on('change', this.change)
    },
    change () {
      // 获取编辑器的内容
      this.$emit('input', this.aceEditor.getSession().getValue())
      // this.$emit('input', this.aceEditor.getSession().getValue())
    },
    resize() {
      this.aceEditor.resize()
    },
    setValue(value){
      //设置编辑器内容
      this.aceEditor.setValue(value)
      this.aceEditor.gotoLine(1);
      beautify.beautify(this.aceEditor.session);
    },
  },
  mounted() {
    this.initEditor();
    this.setValue(this.value);
    // console.log(this.value)
  }
}
</script>

<style lang="less" >
.container {
  position: relative;
  &:hover {
    & > .mode-box {
      transform: translateY(20px);
      opacity: 0;
    }
  }
}
 .ace-editor {
   height: 100%;
   width: 100%;
   ::-webkit-scrollbar {
     width: 14px;
     height: 14px;

   }

   ::-webkit-scrollbar-track,::-webkit-scrollbar-thumb {
     border-radius: 999px;
     border: 5px solid transparent;
   }

   ::-webkit-scrollbar-track {
     box-shadow: 1px 1px 5px rgb(255, 255, 255) inset;
   }

   ::-webkit-scrollbar-thumb {
     min-height: 20px;
     background-clip: content-box;
     box-shadow: 0 0 0 5px #b6b6b6 inset;
   }

   ::-webkit-scrollbar-corner {
     background: transparent;
   }
 }
 .CodeMirror {
   height: 100%;
 }

.mode-box {
  position: absolute;
  top: 10px;
  right: 20px;
  border: #d0d0d0 solid 1px;
  color: #7e7e7e;
  padding: 2px 10px;
  font-size: 14px;
  transition: all 1s 0.5s;
}

 .CodeMirror-scroll {
   background-color: #1d1f20;
 }

</style>

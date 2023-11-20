<template>
  <div :class="prefixCls">
    <quill-editor v-model="content" ref="myQuillEditor" :content="value" :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)"
      @change="onEditorChange($event)">
    </quill-editor>
  </div>
</template>

<script>
import { quillEditor, Quill  } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css';
import quillEmoji from 'quill-emoji'
import "quill-emoji/dist/quill-emoji.css";
Quill.register('modules/quillEmoji', quillEmoji)
export default {
  name: 'CSEditor',
  components: { quillEditor },
  props: {
    prefixCls: {
      type: String,
      default: 'cs-editor-quill'
    },
    // 表单校验用字段
    // eslint-disable-next-line
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: '请输入内容...'
    }
  },
  data() {
    return {
      content: this.value,
      editorOption: {
        modules: {
          "emoji-toolbar": true,
          "emoji-textarea": true,
          "emoji-shortname": true,
          toolbar: [
            ['emoji'],
            ["bold", "italic", "underline", "strike"],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ color: [] }, { background: [] }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ align: [] }],
            [{ direction: "rtl" }],
            ['link', 'image', 'video'],
            ["clean"],
            ["link", "image"],
          ],
          handlers: {
            emoji: function () { },
            'image': function (value) {
              if (value) {
                document.querySelector('.uploadImage input').click()
              } else {
                this.quill.format('image', false);
              }
            }
          }
        },
        theme: 'snow',
        placeholder: this.placeholder
      }
    }
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      // this.$emit('change', html)
      this.$emit("input", this.content);
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  watch: {
    value(val) {
      this.content = val
    },
    placeholder(val) {
      this.$set(this.editorOption, 'placeholder', val)
    }
  }
}
</script>
<style lang="less" scoped>
.cs-editor-quill {
  /deep/  .ql-editor {
    min-height: 400px;
  }
  /deep/  .ql-toolbar.ql-snow {
    border: 1px solid #dcdfe6;
    border-bottom: 0;
    border-radius: 4px 4px 0 0;
  }
  /deep/  .ql-container.ql-snow {
    border: 1px solid #dcdfe6;
    border-radius: 0 0 4px 4px;
  }
}
</style>

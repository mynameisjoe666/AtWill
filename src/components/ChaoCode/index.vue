<template>
  <div>
    <img style="margin: 10px" :id="imgId" :src="imgSrc" alt="Data Matrix Barcode" />
  </div>
</template>

<script>
import bwipjs from 'bwip-js';
export default {
  props: {
    height: {
      type: [Number,String],
      default: 30
    },
    width: {
      type: [Number,String],
      default: 30
    },
    options: {
      type: Object,
      default: ()=> {
        return {}
      }
    }
  },
  data() {
    return {
      imgId: '',
      imgSrc:''
    };
  },
  watch: {
    options: {
      handler(newValue, oldValue) {
        console.log('User object changed:', newValue, oldValue);
        this.generateDataMatrixBarcode();
      },
      deep: true // 如果需要深度监听，设置deep选项为true
    }
  },
  mounted() {
    this.generateDataMatrixBarcode();
  },
  methods: {
    generateDataMatrixBarcode() {
      this.imgId  = Number(Math.random().toString().substr(3,5) + Date.now()).toString(36)
      let canvas = document.createElement('canvas')
      let props = this.options
      try {
        bwipjs.toCanvas(canvas, {
          bcid:        'datamatrix',
          text:        'test',
          scale:        1,
          height:       this.height,
          width:        this.width,
          includetext: true,
          textxalign:  'center',
          ...props
        });
        this.imgSrc = canvas.toDataURL('image/png')
      } catch (e) {
        console.log('error',e)
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>

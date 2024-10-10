<template>
 <div>
   <div>
     <img src="" alt="">
   </div>
   <template v-for="(item, index) in objs">
     <ChaoCode @click.native="handleClick(item)" width="90" height="90" :options="item" />
     {{item.text}}
   </template>
 </div>
</template>

<script>
import ChaoCode from '@/components/ChaoCode'
export default {
  name: "qrCode",
  components: {
    ChaoCode
  },
  data() {
    return {
      i: 0,
      objs: [
        {
          bcid: 'datamatrix',
          text: 'test21请我喝企划12312312312213qwe qw qwe2-qweqwe-sdasdqweqwe请我阿胶我草仨',
          height: 110,
          width: 110,
        },
        {
          bcid: 'qrcode',
          text: 'test1',
        },
        {
          bcid: 'qrcode',
          text: 'test1',
        },
        {
          bcid: 'qrcode',
          text: 'test1',
        },
        {
          bcid: 'datamatrix',
          text: 'test1',
        },
        {
          bcid: 'qrcode',
          text: 'test1',
        },
        {
          bcid: 'qrcode',
          text: 'test1',
        }
      ]
    }
  },
  methods: {
    handleClick(item) {
      this.i = this.i+'1'
      item.text = String(this.i)
      console.log(item)
    }
  }
}
</script>

<style scoped>
.print-30-8 {
  text-align: center;
  box-sizing:border-box;
  display: flex;
  width: 20mm; height: 8mm; background: red;
  font-family: '黑体';
  overflow: hidden;
}

.print-60-40 {
  text-align: center;
  overflow: hidden;
  width: 60mm; height: 40mm; background: red;
  font-family: '黑体';
}

.print-80-60 {
  text-align: left;
  box-sizing:border-box;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  width: 80mm; height: 60mm; background: red;
  font-family: '黑体';
}

.print-100-100 {
  text-align: left;
  box-sizing:border-box;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  width: 100mm; height: 100mm; background: red;
  font-family: '黑体';
}
</style>

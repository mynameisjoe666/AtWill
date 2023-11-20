<!--页面：首页-->
<template>
    <div :class="['home',{'hidden':layoutModel.mode === 'classic'}]">
        <el-row class="user-bar" type="flex" justify="space-between" :gutter="24">
            <el-col :span="8">
                <user-bar/>
            </el-col>
            <el-col class="flex-row flex-center" :span="8">
                <search-bar/>
            </el-col>
            <el-col class="flex-end" :span="8">
                <layoutScheme v-model="layoutModel.mode" />
            </el-col>
        </el-row>
        <template v-if="layoutModel.mode === 'classic'">
            <classicSwiper :slideData="slideData" />
        </template>
        <template v-else-if="layoutModel.mode === 'waterfallFlow'">
            <waterfallFlow />
        </template>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import classicSwiper from './classicSwiper'
    import waterfallFlow from './waterfallFlow'
    export default {
        name: "Home",
        components: {
            classicSwiper, // 经典布局
            waterfallFlow
        },
        computed: {
            ...mapState({
                layoutModel: state => state.publicState.layoutModel, // 元数据 *多项带子集
            })
        },
        data() {
            return {
                // 布局方案
            };
        },
        methods: {
          // 写一个正则表达式，判断是否是数字
          isNumber(val) {
            var regPos = /^\d+(\.\d+)?$/; //非负浮点数
            var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
            if (regPos.test(val) || regNeg.test(val)) {
              return true;
            } else {
              return false;
            }
          },
          // 写一个循环递归函数，把数组里的数字排序
          sortNumber(arr) {
            for (var i = 0; i < arr.length; i++) {
              for (var j = 0; j < arr.length - 1 - i; j++) {
                if (this.isNumber(arr[j]) && this.isNumber(arr[j + 1])) {
                  if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                  }
                }
              }
            }
            return arr;
          }

        },
        mounted() {
            // 写一个递归排序


            // console.log(this.moduleChildTable)
            // console.log('Current Swiper instance object', this.swiper)
            // this.swiper.slideTo(3, 1000, false)
        },
    };
</script>
<style lang="less" scoped>

    .user-phone {
        border: 2px solid #FFFFFF;
        box-sizing: border-box;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
        border-radius: 100px;
    }

    .home {
        width: 100%;
        box-sizing: border-box;
        text-align: left;
        min-height: 100vh;
        background: linear-gradient(180deg, #d0d0d0 1.44%, #EDEDED 20.53%, #EDEDED 30.36%, #EDEDED 88.19%), #C4C4C4;
        /*background-attachment: fixed;*/

    }
    .hidden {
        max-height: 100vh;
        overflow: hidden;
        background: #C4C4C4 linear-gradient(180deg, #CACACA 1.44%, #FAFAFA 43.53%, #EAEAEA 56.36%, #efefef 88.19%) fixed;
    }
    .user-bar {
        width: 100%;
        padding: 20px 20px;
        box-sizing: border-box;
    }




</style>


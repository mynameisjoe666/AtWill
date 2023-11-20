<!--组件：tabs块-->
<template>
  <div class="positionTabs">
    <div :class="{active: active == index}" @click="handleClick(item, index)" v-for="(item, index) in tabs" :key="item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "positionTabs",
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    tabs: {
      type: Array,
      default: () => {
        return [
          '选项A', '选项B'
        ]
      }
    }
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleClick(item, index) {
      this.active = index
      this.$emit('input', index)
      console.log(item, index)
    }
  },
  created() {
    this.active = this.value
  }
}
</script>

<style lang="less" scoped>
  .positionTabs {
    display: flex;
    & > div {
      padding: 8px 30px;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.1s 0.03s;
      font-size: 12px;
      &:hover {
        color: @Blue1;
      }
      &.active {
        background-color: @Blue1;
        color: @White;
      }
    }
  }
</style>

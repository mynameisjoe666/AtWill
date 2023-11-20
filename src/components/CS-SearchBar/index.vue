<!--组件:自定义综合搜索栏-->
<template>
  <div :style="{width:`${width}px`}" class="ComprehensiveSearch">
    <div class="search-input">
      <el-input :placeholder="placeholder"
                clearable :value="value"
                size="small"
                @clear="$emit('search')"
                @keyup.enter.native="$emit('search')"
                @input="handleInput"
                class="input-with-select">
        <el-button size="small" slot="append" icon="el-icon-search" @click="$emit('search')"></el-button>
      </el-input>
      <el-popover
        placement="bottom-start"
        popper-class="dcPopover"
        ref="dcPopover"
        :width="popWidth"
        :popper-options="{boundariesElement: 'viewport'}"
        trigger="click">
        <div>
          <slot></slot>
        </div>
        <el-button size="small" slot="reference" class="screening" icon="staff staff-screening"></el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CSSearchBar',
    props: {
      value: [String],
      width: [String],
      placeholder: [String]
    },
    data() {
      return {
        select: '1',
        offset: '',
        popWidth: '',
        popMinWidth: 1280
      }
    },
    methods: {
      handleInput($val) {
        this.$emit('input', $val)
      },
      getHeight() {
        const leftMenu = document.querySelector('.sidebar-container').clientWidth
        this.popWidth = window.innerWidth > this.popMinWidth ? window.innerWidth - leftMenu - 40 : window.innerWidth
        this.offset = -255
      }
    },
    mounted() {
      // window.addEventListener('resize', this.getHeight)
      // this.getHeight()
    },
    destroyed() {
      // window.removeEventListener('resize', this.getHeight)
    }
  }
</script>

<style lang="less" scoped>
  .ComprehensiveSearch {
    width: 100%;
  }

  .search-input {
    display: flex;
  }

  /deep/   .el-select .el-input {
    width: 105px;
  }

  /deep/   .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  /deep/   .el-input-group__append, .el-input-group__prepend {
    background-color: #fff;

    &:hover {
      background-color: #E9E9FA;
      border: #BCBCEF solid 1px;
      color: #2128CC;
    }
  }

  .screening {
    margin-left: 10px;
    height: 32px!important;
  }
</style>

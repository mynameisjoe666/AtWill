<!-- 组件：顶部导航 -->
<template>
  <div class="top-navigation flex-row space-between" :class="{hide:!navigationShow,shadow:navigationShadow}">
    <!--   左侧    -->
    <template v-if="type === 'default'">
      <div class="logo-box flex-row flex-start">
        <!--   logo    -->
        <div class="staff staff-man flex-row flex-center"></div>
        <!--   下拉选项    -->
        <div>
        <span class="el-dropdown-link">
             {{ companyInfo.length > 10 ? `${companyInfo.substring(0, 10)}...` : companyInfo }}
        </span>
        </div>
      </div>
      <!--   中间导航    -->
      <div class="center-menu flex-row space-between flex-center">
        <div v-for="(item, index) in menuInfo" :key="index"
             :class="[`menu staff ${item.icon}`, {active: item.path == $route.path}]">
          <span @click="gotoPageNumber(item.path)">{{ item.menuName }}</span>
          <!--  二级导航    -->
          <h1 v-if="item.children" class="footer-menu flex-row flex-center">
            <template v-for="(list, listIndex) in item.children">
              <btnGrid @click.native="gotoPath(list.path)" margin="15px" :key="listIndex" :list="list"></btnGrid>
            </template>
          </h1>
        </div>
      </div>
    </template>
    <template v-if="type === 'learning'">
      <div class="logo-box flex-row flex-start">
        <i @click="()=>{ $router.go(-1) }" class="el-icon-back"></i>
        <p class="black font-bold">(6-1)医疗器械品类销售常用技巧</p>
      </div>
    </template>
    <!--   右侧按钮组    -->
    <div class="right-menu flex-row space-between flex-end">
      <div v-if="false" @click="qrCode = true" class="staff staff-phone right-icon"></div>
      <div class="staff staff-setup right-icon"></div>
      <div class="user-icon"><img src="../../assets/user/user-icon.svg"/></div>
    </div>
    <!--   弹窗二维码   -->
    <div v-if="qrCode" class="qr-code flex-row flex-center">
      <img width="340px" src="@/assets/user/qr-code.png" alt="">
      <div @click="qrCode = false" class="iconfont iconclose"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "topNavigation",
  props: {
    type: {
      type: String,
      default: "dd",
    }
  },
  data() {
    return {
      navigationShow: true, // 是否显示顶部导航
      navigationShadow: false, // 是否显示阴影
      qrCode: false,
      companyInfo: '跨界经理人销售员工端',
      menuInfo: [
        {
          menuName: '工作台',
          icon: 'staff-panel',
          path: '/',
          children: [{icon: 'staff-approval', name: 'JS在线编辑器', path: '/codeEdit',}]
        },
        {menuName: '授权产品', icon: 'staff-info', path: '/licensedProducts'},
        {
          menuName: '学习天地',
          icon: 'staff-onese',
          path: '/course',
          children: [{icon: 'staff-approval', name: '课程学习', path: '/course',}, {
            icon: 'staff-approval',
            name: '在线问答',
            path: '/question',
          }]
        },
        {
          menuName: '我的订单', icon: 'staff-approval', path: '/myOrder', children: [
            {icon: 'staff-approval', bgc: '#747fc4', name: '全部订单', path: '/myOrder',},
            {icon: 'staff-approval', name: '待完成', path: '/myOrder'},
            {icon: 'staff-approval', name: '已完成', path: '/myOrder'},
            {icon: 'staff-approval', name: '已关闭', path: '/myOrder'}
          ]
        },
        {
          menuName: '产品发布', icon: 'staff-onese', path: '/productRelease', children: [
            {icon: 'staff-approval', name: '全部产品', path: '/productRelease',},
            {icon: 'staff-approval', name: '已上架', path: '/productRelease'},
            {icon: 'staff-approval', name: '未上架', path: '/productRelease'}
          ]
        },
        {
          menuName: '个人中心', icon: 'staff-onese', path: '/personalCenter/userInfo', children: [
            {icon: 'staff-approval', name: '个人信息', path: '/personalCenter/userInfo',},
            {icon: 'staff-approval', name: '我的考试', path: ''},
            {icon: 'staff-approval', name: '我的证书', path: ''},
            {icon: 'staff-approval', name: '我的问答', path: ''},
            {icon: 'staff-approval', name: '我的积分', path: ''}
          ]
        },
      ]
    }
  },
  watch: {
    '$route'() {
      this.navigationShow = true
    }
  },
  mounted() {
    if (this.type === 'default') {
      window.removeEventListener('scroll', this.handleScroll, true)
      window.removeEventListener('wheel', this.handleWheel, true)
      window.addEventListener('scroll', this.handleScroll, true)
      window.addEventListener("wheel", this.handleWheel, true)
    }
  },
  methods: {
    handleWheel(e) {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      setTimeout(() => {
        if (e.wheelDelta > 1) {
          this.navigationShow = true
        } else if (e.wheelDelta < -15) {
          this.navigationShow = !(scrollTop > 200)
        }
      }, 300)
    },
    handleScroll() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      this.navigationShadow = scrollTop > 5
    },
    gotoPageNumber(path) {
      this.$router.push(path)
    },
    gotoPath(path) {
      this.$router.push(path)
    }
  }
};
</script>

<style scoped lang="less">

.top-navigation {
  width: 100%;
  min-width: 1440px;
  height: 55px;
  background-color: @Gray6;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  transition: 0.3s all;
}

.shadow {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}

.staff-man {
  width: 55px;
  height: 55px;
  background-color: @Blue1;
  color: @White;
  font-size: 34px;
  text-align: center;
}

.el-dropdown-link {
  cursor: pointer;
  color: @Gray3;
  height: 100%;
  font-size: 14px;
  padding-left: 20px;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.logo-box {
  width: 30%;
}

.center-menu {
  position: relative;
  height: 55px;
  flex: 1;

  & > div {
    padding: 0 20px;
    color: @Gray3;
    font-size: 14px;

    & > span {
      cursor: pointer;
      padding-left: 5px;
      white-space: nowrap;
    }
  }

  .active, & > div:hover {
    color: @Blue1;

    & > span {
      font-weight: bold;
    }
  }

  .footer-menu {
    color: @Gray2;
  }
}

.menu {
  :hover {
    span {
      color: red;
    }
  }
}

.right-menu {
  width: 30%;
  padding-right: 20px;

  .right-icon {
    font-size: 22px;
    margin-right: 10px;
    color: @Gray3;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: @Blue1;
    }
  }

  .staff-setup {
    font-size: 24px;
  }

  .user-icon {
    cursor: pointer;

    img {
      width: 26px;
      height: 26px;
    }
  }
}

.footer-menu {
  pointer-events: none;
  transition: all 0.3s 0.1s;
  position: fixed;
  overflow: hidden;
  /*opacity: 0;*/
  width: 100%;
  display: flex;
  height: 0px;
  left: 0;
  top: 55px;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 7px 11px rgba(0, 0, 0, 0.04);
}

.staff {
  position: relative;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    .footer-menu {
      display: flex;
      /*opacity: 1;*/
      pointer-events: inherit;
      height: 136px;
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      backdrop-filter: saturate(180%) blur(20px);
    }
  }
}

.qr-code {
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
}

.iconclose {
  width: 60px;
  height: 60px;
  font-size: 60px;
  position: absolute;
  top: -518px;
  left: 390px;
  right: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  color: @White;
  transition: all 0.3s;
  transform-origin: 50% 51%;

  &:hover {
    color: @Blue1;
    transform: rotate(360deg);
  }
}

.hide {
  transform: translateY(-55px);

}

.el-icon-back {
  margin-left: 30px;
  margin-right: 30px;
  font-size: 24px;
  color: @Gray3;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: bold;

  &:hover {
    color: @Blue1;
  }
}

</style>

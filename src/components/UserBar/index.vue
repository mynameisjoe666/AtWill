<template>
  <div class="user-bar flex-start">
    <img class="user-phone" src="@/assets/user/user-phone.svg" alt="" />
    <dl class="user-right">
      <dt class="flex-start">经理人A</dt>
      <dd class="flex-start"><div>等级: 钻石</div> <div class="margin-left-min">销售业绩：<span class="evaluation bg-green1 white">{{ level }}</span></div></dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      level: '优'
    };
  },
};
</script>

<style scoped lang="less">
.user-bar {
}
.user-right {
  flex: 1;
  dt {
    padding-bottom: 10px;
    font-size: 20px;
  }
  dd {
    padding-bottom: 5px;
    font-size: 12px;
  }
}
.user-phone {
  border: 2px solid #ffffff;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  border-radius: 100px;
  align-self: start;
  margin-right: 20px;
}
.evaluation {
  display: inline-block;
  padding: 1px 20px;
  font-size: 14px;
  border-radius: 100px;
  font-weight: 700;
  transform: scale(0.7);
}
</style>

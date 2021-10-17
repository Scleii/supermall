<template>
  <div id="tab-bar">
     <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped="scoped" lang="less">
  #tab-bar {
    /* 设置flex布局将子项目按份数平均布局 */
    display: flex;
    background-color: #f6f6f6;
    /* 将整个tab-bar放到底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /* 阴影属性 ---设置边界的阴影，看起来更丝滑 */
    box-shadow: 0 -1px 1px rgba(100,100,100,.15);
  }

</style>

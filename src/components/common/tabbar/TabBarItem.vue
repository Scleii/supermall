<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 所有的插槽在使用时，都在外层用div包装一下，这样子可以保证插槽再被替换的时候，不会把插槽中设置的属性替换掉！！ -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: '#e88b2f'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      // 动态绑定文字颜色，使用人想使用什么颜色可以自己传入
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    /* 平均布局 flex:1 */
    flex: 1;
    text-align: center;
    /* tab-bar默认高度49px */
    height: 49px;
    font-size:14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
  /* .active {
    color: #e88b2f;
  } */
</style>

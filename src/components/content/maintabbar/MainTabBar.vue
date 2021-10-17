<template>
  <tab-bar>
    <tab-bar-item path="/home">
			<template #item-icon><div><img src="~assets/img/tabbar/home.svg"></div></template>
			<template #item-icon-active><div><img src="~assets/img/tabbar/home_active.svg" ></div></template>
			<template #item-text><div>首页</div></template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template #item-icon><div><img src="~assets/img/tabbar/category.svg" ></div></template>
			<template #item-icon-active><div><img src="~assets/img/tabbar/category_active.svg" ></div></template>
			<template #item-text><div>分类</div></template>
    </tab-bar-item>
    <tab-bar-item path="/shoppingcart">
      <template #item-icon><div><img src="~assets/img/tabbar/shoppingcart.svg" ></div></template>
			<template #item-icon-active><div><img src="~assets/img/tabbar/shoppingcart_active.svg" ></div></template>
			<template #item-text><div>购物车</div></template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template #item-icon><div><img src="~assets/img/tabbar/profile.svg" ></div></template>
      <template #item-icon-active><div><img src="~assets/img/tabbar/profile_active.svg" ></div></template>
      <template #item-text><div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue'
  import TabBarItem from 'components//common/tabbar/TabBarItem.vue'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem,
    }
  }
</script>

<style >
</style>

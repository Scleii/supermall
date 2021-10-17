<template>
  <div id="app">
    <router-view v-slot="{ Component}" >
<!--这里的keep-alive是为了在页面切换时，保留切换前的页面，再次切换回来，会再次回到上次切换出去的位置！-->
      <keep-alive exclude="Detail">
        <component :is="Component"/>
      </keep-alive>
    </router-view>


    <main-tab-bar></main-tab-bar>
  </div>

</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar.vue'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }

  }
</script>

<style>
@import "assets/css/base.css";
</style>

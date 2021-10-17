<template>
  <div class="back-top" @click="backClick">
    <img src="~assets/img/common/top.svg" >
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {
      backClick() {
        console.log('1')
      }
    }
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;

  }
  .back-top img {
    width: 43px;
    height: 43px;
    background-color: #e88b2f;
    border-radius: 50%;

  }
</style>

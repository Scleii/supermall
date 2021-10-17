<template>
  <div class="wrapper" ref="aaa">
      <div id="" @click="btnClick">
        <h3>big</h3>
        </div>
    <ul class="content">


      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
      <li>neirong</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Category',
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.aaa,{
        click:true
      })
      console.log(this.scroll)
    },
    methods: {
      btnClick() {
        console.log('----')
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;

    overflow: hidden;
  }
</style>

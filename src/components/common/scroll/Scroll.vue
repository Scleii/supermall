<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  // import ObserveDOM from '@better-scroll/observe-dom'
  // import ObserveImage from '@better-scroll/observe-image'

  BScroll.use(Pullup)
  // BScroll.use(ObserveDOM)
  // BScroll.use(ObserveImage)

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    // updated() {
    //   this.scroll = new BScroll(this.$refs.wrapper,{

    //   })
    // }
    mounted() {
      // 1.创建better-scroll对象
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad, // 监听下拉到底部
        // ObserveDOM: true,
        // ObserveImage: true
      })
      // 2.实时监听滚动的位置
      if(this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll', position)
        })
      }

      // 3.监听上拉事件
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          // this.PullUpLoad = true
          this.$emit('pullingUp')
          this.scroll.finishPullUp()
          this.scroll.refresh()
          // this.PullUpLoad = false
        })
      }
    },
    methods: {
      scrollTo(x, y , time=300) {
        this.scroll.scrollTo(x, y, time);
      },
      // finishPullUp() {
      //   this.scroll.finishPullUp()
      //   // this.bscroll.refresh();
      //   // this.PullUpLoad = false
      // }
    }
  }
</script>

<style>

</style>

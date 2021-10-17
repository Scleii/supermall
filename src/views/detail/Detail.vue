<template>
  <detail-nav-bar></detail-nav-bar>
  <detail-swiper :topImages="topImages"></detail-swiper>
  <detail-base-info :goods="goods"></detail-base-info>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'

  import {getDetail, Goods} from 'network/detail'

  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      getDetail,
      DetailSwiper,
      Goods,
      DetailBaseInfo
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {}
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求传入的数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;

        // 3.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      })


    }
  }

</script>

<style>

</style>

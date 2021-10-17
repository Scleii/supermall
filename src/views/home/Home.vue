<template>
  <div id="home">
    <nav-bar class="home-nav"><template #center><div>购物街</div></template></nav-bar>
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">

      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" class="tab-control" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

     <back-top @click="backClick" v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import { getHomeMultidata, getHomeGoods } from "network/home"

  // import Swiper from "components/common/swiper/Swiper"
  // import SwiperItem from "components/common/swiper/SwiperItem"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles:['流行','新款','精选'],
      goods:{
        'pop' : {page: 0, list: []},
        'new' : {page: 0, list: []},
        'sell' : {page: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
     this.getHomeGoods('pop');
     this.getHomeGoods('new');
     this.getHomeGoods('sell');

    this.$refs.scroll && this.$refs.scroll.scroll.refresh();
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0: this.currentType = 'pop';
        break;
        case 1: this.currentType = 'new';
        break;
        case 2: this.currentType = 'sell';
        break;
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      if( (-position.y) > 1000) {
         this.isShowBackTop = true
      }else {
        this.isShowBackTop = false
      }
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    /**
     * 网络请求相关方法
     */

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // this.$refs.scroll.finishPullUp();
      })

    }
  }
}
</script>

<style scoped="scoped" lang="less">
  #home {
    // padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 在浏览器使用原生滚动的时候设置的属性*/
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    // z-index: 9;
  }
  /**
   * 利用属性将导航栏固定在页面顶部
   */
  // .tab-control {
  //   position: sticky;
  //   top: 44px;
  //   z-index: 9;
  // }

  .content {
    // height: 300px;
    height: calc(100% - 93px);
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    margin-top: 51px;
  }

</style>

<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadmore"
    > <!--不写冒号的话，传的是字符串-->
    <HomeSwiper :banners="banners"/>
    <HomeRecommendView :recommends="recommends"/>
    <HomeFeatureView/>
    <TabControl class="tab-control"
                :titles="['流行','新款','精选']"
                @tabClick="tabClick"
    />
    <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>

    <!--组件默认不可监听的，如果想监听，需要用 @click.native 即可监听组件的根元素-->
    <BackTop @click.native="backClick" v-show = "isShowBackTop"/>

  </div>
</template>

<script>

  import HomeSwiper from "./childrenComponents/HomeSwiper";
  import HomeRecommendView from "./childrenComponents/HomeRecommendView";
  import HomeFeatureView from "./childrenComponents/HomeFeatureView";

  import NavBar from "../../components/common/navbar/NavBar";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";


  import {getHomeMultidata,getHomeGoods} from "../../network/home";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeRecommendView,
      HomeFeatureView,

      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list:[]},
          'new': {page: 0, list:[]},
          'sell': {page: 0, list:[]},
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    created() {
      //1，请求多个数据
      this.getHomeMultidata()

      //2，请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      //网络请求相关方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page+1;
        getHomeGoods(type,page).then(res => {
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          this.$refs.scroll.finishPullUp()
        })
      },
      //事件监听方法
      tabClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }

      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0,500);
      },
      contentScroll(pos) {
        this.isShowBackTop = (-pos.y) > 1000
      },
      loadmore() {
        this.getHomeGoods(this.currentType)

        this.$refs.scroll.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;  /*视口高度*/
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

  /*通过绝对定位来确定滑动区域位置*/
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  /*这里是通过计算得到滑动位置*/
/*  .content {
    height: calc(100% - 93px);
    !*height:300px;*!
    overflow: hidden;
    margin-top: 44px;
  }*/

</style>

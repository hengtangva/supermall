<template>
  <div id="detail">
    <DetailNavBar class="detail-bar"/>
      <Scroll class="content">   <!--使用 scroll 只需将其包裹中想要滚动的元素，并给一个固定高度-->
      <DetailSwiper :top-imag="topImag"/>
      <DetailBaseInfo :goods = "goods"/>
      <DetailShopInfo :shop = "shops"/>
      <DetailGoodsInfo :detail-info="detailInfo"/>
    </Scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import {getDetail,Goods,Shop} from "../../network/detail";
  import DetailSwiper from "./childComponents/DetailSwiper";
  import DetailBaseInfo from "./childComponents/DetailBaseInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailShopInfo from "./childComponents/DetailShopInfo";
  import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";

  export default {
    name: "Detail",
    components: {
      DetailShopInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailGoodsInfo,
      Scroll
    },
    data() {
      return{
        iid :null,
        topImag: [],
        goods: {},
        shops: {},
        detailInfo: {}
      }
    },
    created() {
      //1,保存传入的 iid
      //路由传来的参数
      this.iid = this.$route.params.iid

      //2,根据 iid 请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.result

        //2,1，顶部的轮播图
        this.topImag = data.itemInfo.topImages;

        //2.2， 商品的信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        //2.3，店铺的信息
        this.shops = new Shop(data.shopInfo)

        //2.4, 商品穿着信息
        this.detailInfo = data.detailInfo

        console.log(res);
      })
    }
  }
</script>

<style scoped>
#detail {
  /*脱离标准流后，让它相对定位，并覆盖到底下的tabbar*/
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;  /*指定其视口高度，为整个窗口*/
}

  .content {
    height: calc(100% - 44px);  /*滚动区域为视高，减去上方的 tabbar */
  }
  .detail-bar {
    position:relative;
    z-index: 9;
    background-color: #fff;
  }
</style>

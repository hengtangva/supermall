<template>
  <div id="detail">
    <DetailNavBar/>
    <DetailSwiper :top-imag="topImag"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComponents/DetailNavBar";
  import {getDetail,Goods} from "../../network/detail";
  import DetailSwiper from "./childComponents/DetailSwiper";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
    },
    data() {
      return{
        iid :null,
        topImag: [],
        goods: null
      }
    },
    created() {
      //1,保存传入的 iid
      //路由传来的参数
      this.iid = this.$route.params.iid

      //2,根据 iid 请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.result

        this.topImag = data.itemInfo.topImages;

        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>

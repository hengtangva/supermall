<template>
  <Swiper class="swiper-detail">
    <SwiperItem v-for="item in topImag">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper';
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImag: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.swiper-detail {
  height: 300px;
  overflow: hidden;
}
</style>

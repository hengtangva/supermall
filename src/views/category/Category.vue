<template>
  <div class="wrapper">
    <ul>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>

    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>
    <li>123</li>

  </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'


  export default {
    name: "Category",
    data() {
      return{
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType: 3, //值为3可以监听滚动
        pullUpLoad: true,
      })
      this.scroll.on('scroll',(position) => {
        //console.log(position);
      })

      this.scroll.on('pullingUp',() => {
        console.log('上拉加载更多');
      })
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

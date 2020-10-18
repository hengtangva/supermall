<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";
  export default {
    name: "GoodsList",
    components:{
      GoodListItem,
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;/*包裹，*/
    justify-content: space-around;/*均等分*/
    padding: 2px;
  }


</style>

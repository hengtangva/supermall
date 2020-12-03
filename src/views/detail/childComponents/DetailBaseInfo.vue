<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods: {
        type: Object,
        // default() {
        //   return {}
        // }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #222;
    font-size:20px;
  }
  .info-price {
    margin-top:10px;
    display: flex;
    align-items: flex-end;
  }
  .n-price {
    color: var(--color-high-text);
    font-size: 24px;
  }
  .o-price {
    font-size: 15px;
    margin-left:10px;
    text-decoration: line-through;
  }
  .discount {

    /*让元素上浮一些: 使用相对定位即可*/
    /*position: relative;*/
    /*top: -8px;*/

    /*或者我这里直接用flex布局，让其直接置顶*/
    align-self: flex-start;
    padding:2px 5px;
    color:#fff;
    background-color: #ff5777;
    border-radius: 8px;
    margin-left:10px;
    font-size: 12px;
  }

  .info-other {
    font-size: 13px;
    margin-top:12px;
    display:flex;
    border-bottom: 1px solid rgba(100,100,100,.1); /*设置下边框的阴影*/
    justify-content: space-between;
    line-height: 30px;
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .info-service-item  span{
    font-size: 13px;
    color: #333;
  }
  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

</style>

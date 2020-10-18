<template>
  <div class="good">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },

  }
</script>

<style scoped>

  /*子元素绝对定位的话，父元素必须相对定位，这里goods-info是绝对定位，所以，父元素goods采取相对定位*/
  .good {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }
  .good img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;  /*文字在一行显示，多的话就显示....*/
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px; /*伪元素的形式*/
  }
</style>

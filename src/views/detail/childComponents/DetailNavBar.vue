<template>
  <div>
    <NavBar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles"
             class="title-item"
             :class="{active: index === currentIndex}"
             @click="chooseTitle(index)"
             >
          {{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar,
    },
    data() {
      return {
        titles: ['商品',' 详情','评论','推荐'],
        currentIndex: 0,

      }
    },
    methods: {
      back() {
        this.$router.go(-1);  //返回上一页面
      },
      chooseTitle(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;   /*flex 布局 水平*/
  }
  .title-item {
    flex: 1;         /*让 flex 布局里面的组件均等分*/
  }
  .back {
    padding-top:8px;
  }
  .active{
    color:var(--color-high-text)
  }
</style>

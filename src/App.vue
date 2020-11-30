<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!--Detail 不需要keep-alive，，因为每次点击详情页都会请求新的数据-->
    <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>


import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
    @import "assets/css/base.css";  /*导入基础样式*/
</style>

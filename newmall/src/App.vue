<template>
  <div id="app">
    <!-- 注意exclude的使用需要组件设置name属性值 -->
    <!-- keep-alive:阻止组件销毁 -->
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>


<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";

</style>

<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img src="@/assets/img/tabbar/home.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
          slot="item-active"
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img src="@/assets/img/tabbar/category.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/category_active.svg"
          alt=""
          slot="item-active"
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img src="@/assets/img/tabbar/shopcart.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/shopcart_active.svg"
          alt=""
          slot="item-active"
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img src="@/assets/img/tabbar/profile.svg" alt="" slot="item-icon" />
        <img
          src="@/assets/img/tabbar/profile_active.svg"
          alt=""
          slot="item-active"
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "",
  data() {
    return {};
  },

  components: {
    TabBar,
    TabBarItem,
  },

  computed: {},

  methods: {},
};
</script>

<style>
</style>
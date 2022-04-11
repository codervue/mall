<template>
  <div id="home">
    <div>
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    </div>
    <home-swipe :banner="banner"></home-swipe>
    <recommend :recommend="recommend" />
    <feature />
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl"
    ></tab-control>
    <!-- tabClick不能在这里传参（index），方法里面在进行传参 -->
    <goods-list :goods-list="showGoods"></goods-list>
    <back-top @lodeMore="lodeMore"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";

import HomeSwipe from "@/views/home/childHome/HomeSwipe";
import Recommend from "@/views/home/childHome/Recommend";
import Feature from "@/views/home/childHome/Feature";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  destroyed() {
    console.log("用户组件被销毁");
  },
  computed: {
    //计算属性整合showgoods
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  //组件创建时发送网络请求
  created() {
    //multidata数据请求的封装
    this.getHomeMultidata();
    //homegoods数据请求的封装
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  components: {
    NavBar,
    HomeSwipe,
    Recommend,
    Feature,
    TabControl,
    GoodsList,
    BackTop,
  },
  methods: {
    //上拉加载更多
    lodeMore() {
      this.getHomeGoods(this.currentType);
    },
    //事件点击相关函数
    //实现tabcontrol切换
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    //-----网络请求相关函数
    //multidata数据函数
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        //将数据保存在data中,否则数据在函数执行完成后被销毁
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    //homedata数据函数
    getHomeGoods(type) {
      //每调用一次页码参数加1
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //数据存储
        //...res将数组数据传进data，不加点就是将整个数组当作一个元素传进data
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>
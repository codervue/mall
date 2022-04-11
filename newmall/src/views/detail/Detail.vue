<template>
  <div id="detail">
    <detail-nav-bar @itemClick="itemClick"></detail-nav-bar>
    <detail-swipe :topImages="topImages"></detail-swipe>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    <detail-params-info
      :params-info="paramsInfo"
      ref="params"
    ></detail-params-info>
    <detail-comment-info
      :comment-info="commentInfo"
      ref="comment"
    ></detail-comment-info>
    <goods-list :goods-list="recommend" ref="recommend"></goods-list>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top></back-top>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwipe from "@/views/detail/childComps/DetailSwipe";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamsInfo from "@/views/detail/childComps/DetailParamsInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import BackTop from "@/components/content/backtop/BackTop";

import {
  getDetailGoods,
  Goods,
  Shop,
  Params,
  getCommend,
} from "@/network/detail";

import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommend: [],
      topY: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    //发送网络请求获取数据
    getDetailGoods(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      //储存图片信息
      this.topImages = data.itemInfo.topImages;
      //拿取已整合后的数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //拿去店铺信息
      this.shop = new Shop(data.shopInfo);
      //商品信息展示
      this.detailInfo = data.detailInfo;
      //参数信息展示
      this.paramsInfo = new Params(data.itemParams.info, data.itemParams.rule);
      //评论信息展示
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //推荐信息数据拿取
    getCommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  mounted() {},
  updated() {
    this.$nextTick(() => {
      this.topY.push(0);
      this.topY.push(this.$refs.params.$el.offsetTop);
      this.topY.push(this.$refs.comment.$el.offsetTop);
      this.topY.push(this.$refs.recommend.$el.offsetTop);
    });
  },
  methods: {
    //定位到指定位置
    itemClick(index) {
      document.documentElement.scrollTop = this.topY[index];
    },
    addToCart() {
      //弹窗提醒
      this.$toast("加入购物车");
      //创建空对象
      const obj = {};
      //对象信息
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.newPrice = this.goods.realPrice;
      //添加到store对象中
      this.$store.commit("addCart", obj);
    },
  },
};
</script>

<style scoped="scoped">
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>
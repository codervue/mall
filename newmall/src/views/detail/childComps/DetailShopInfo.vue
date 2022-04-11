<template>
  <div class="shop-info">
    <div class="shop-top">
      <span><img :src="shop.logo" alt="" /></span>
      <span class="word">{{ shop.name }}</span>
    </div>
    <div class="shop">
      <div class="left middle">
        <div class="sells center">
          <div>{{ shop.sells }}</div>
          <div>总销量</div>
        </div>
        <div class="count center">
          <div>{{ shop.goodsCount }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right middle"></div>
    </div>
    <div class="import">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style scoped='scoped'>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top {
  line-height: 45px;
}
.shop-top img {
  width: 45px;
  height: 45px;
}
.shop {
  display: flex;
}
.middle {
  flex: 1;
}
.left {
  display: flex;
}
.center {
  flex: 1;
}
.import {
  text-align: center;
  margin-top: 20px;
  color: aquamarine;
  border: 1px solid aquamarine;
}
</style>
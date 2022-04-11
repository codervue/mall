<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in topImages" :key="item" class="swipe-item">
        <img :src="item" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    topImages: Array,
    default() {
      return [];
    },
  },
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<style>
.swipe {
  margin-top: 44px;
}
.swipe-item {
  height: 300px;
}
.swipe-item img {
  width: 100%;
}
</style>
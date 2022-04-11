<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 外层最好用div包装，否则一些属性不会生效 -->
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1; //indexOf:与当前路径相匹配，匹配失败，返回-1
      //return this.$route.path === this.path
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },

  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => {}); //catch防止连续点击报错
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>
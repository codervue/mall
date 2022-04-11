<template>
  <div class="tab-control" :class="{ sticky: showTabControl }">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      @click="itemClick(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    titles: Array,
    default() {
      return [];
    },
  },
  data() {
    return {
      currentIndex: 0,
      showTabControl: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  components: {},

  computed: {},

  methods: {
    itemClick(index) {
      this.currentIndex = index;
      //发出事件
      this.$emit("tabClick", index);
    },
    scroll() {
      if (window.pageYOffset >= 685) {
        this.showTabControl = true;
      } else {
        this.showTabControl = false;
      }
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
.sticky {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>
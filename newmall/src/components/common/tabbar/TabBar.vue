<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";
export default {
  name: "",
  data() {
    return {};
  },

  components: {
    TabBarItem,
  },

  computed: {},

  methods: {},
};
</script>

<style>
#tab-bar {
  display: flex;
  background: #fff;

  position: fixed;
  left: 0;
  right: 0;
  bottom: -1px;
  /* 完全盖住底部 */

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
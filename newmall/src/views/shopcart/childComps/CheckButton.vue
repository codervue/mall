<template>
  <div>
    <div
      class="icon-selector"
      :class="{ 'selector-active': isChecked }"
      @click="checkedChange"
    >
      <img src="~/assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
    },
  },
  data(){
    return {

    }
  },
  methods: {
    selectItem: function () {
      this.$emit("checkBtnClick");
    },
    checkedChange() {
      //修改props的值会报错，不允许修改
      // this.isChecked = !this.isChecked;
    },
  },
  watch: {
    value: function (newValue) {
      this.checked = newValue;
    },
  },
};
</script>

<style scoped>
.icon-selector {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}

.selector-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>

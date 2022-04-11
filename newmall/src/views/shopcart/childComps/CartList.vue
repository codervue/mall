<template>
  <div class="cart-list">
    <cart-list-item
      v-for="item in cartList"
      :key="item.iid"
      :item-info="item"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.cart-list {
  margin-top: 44px;
}
</style>

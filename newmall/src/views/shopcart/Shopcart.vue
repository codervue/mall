<template>
  <div>
    <nav-bar class="home-nav"
      ><div slot="center">
        购物车({{ $store.state.cartList.length }})
      </div></nav-bar
    >
    <cart-list :cart-list="cartList"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "./childComps/CartList.vue";
import BottomBar from "./childComps/BottomBar.vue";

export default {
  name: "shopcart",
  data() {
    return {};
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
  },
  components: { NavBar, CartList ,BottomBar},

 

  methods: {},
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
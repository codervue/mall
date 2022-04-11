<template>
  <div class="bottom-menu">
    <CheckButton
      class="select-all"
      :is-checked="isCheckedAll"
      @click.native="btnClick"
    ></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{ totalPrice }}</span>
    <span class="buy-product">去计算({{ toCount }})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "BottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.newPrice * item.count;
        }, 0)
        .toFixed(2); //保留两位小数
      //prevalue为先前总值，需加上否则计算结果为最后一个商品值
      //报错为NAN：数据库中的价格带有￥，所以无法计算导致计算为NAN
    },
    toCount() {
      //加上大括号就是函数体，会报错除非再加上return=>    { return item.checked}
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isCheckedAll() {
      if (this.$store.state.cartList.length === 0) return false; //默认为false
      return !this.$store.state.cartList.find((item) => !item.checked); //方法一：没有符合条件的元素返回undefind取反为true
      // return !this.$store.state.cartList.filter((item) => !item.checked).length;方法二：存在返回数组取反为false,不存在返回0取反为true
    },
  },
  methods: {
    btnClick() {
      if (this.isCheckedAll) {
        //如果全选中
        this.$store.state.cartList.forEach((item) => {
          item.checked = false;
        });
      } else {
        //否则全部不选中
        this.$store.state.cartList.forEach((item) => {
          item.checked = true;
        });
      }
    },
  },
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
  margin-bottom: -3px;
}

.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}

.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>

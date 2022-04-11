<template>
  <div class="base-info">
    <div class="b-title">
      <h4>{{ goods.title }}</h4>
    </div>
    <div class="b-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">
        <s>{{ goods.oldPrice }}</s>
      </span>
      <span class="b-discount">{{ goods.discount }}</span>
    </div>
    <div class="b-columns">
      <span v-for="(item, index) in goods.columns" :key="index">{{
        item
      }}</span>
    </div>
    <div class="b-services">
      <span v-for="(value, demo) in goods.services" :key="demo">{{
        value.name
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goods: {
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

<style scoped="scoped">
/* 命名继承问题不能取同名 */
.b-title {
  font-size: 20px;
  margin: 5px 0;
  color: darkslategray;
}
.b-price {
  margin: 20px 0;
}
.n-price {
  font-size: 24px;
  color: #ff5777;
  padding: 0 7px;
}
.b-discount {
  background-color: #ff5777;
  font-size: 12px;
  margin: 0 0 0 5px;
  padding: 2px 5px;
  color: #fff;
  border-radius: 8px;
}
.b-columns {
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(100, 100, 100, 0.1);
}
.b-services {
  margin: 15px 0;
  padding-bottom: 15px;
  font-size: 7px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(100, 100, 100, 0.1);
}
</style>
<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="goods-info">{{ detailInfo.desc }}</div>
    <div>{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="item in detailInfo.detailImage[0].list"
        :src="item"
        alt=""
        :key="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    detailInfo: {
      type: Object,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style  scoped>
.info-list img {
  width: 100%;
}
.goods-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
</style>
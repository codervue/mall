<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment">
    <div>
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div>
      <p>{{ commentInfo.content }}</p>
      <span>{{ commentInfo.created }}</span>
      <span>{{ commentInfo.style }}</span>
    </div>
    <div class="img">
      <img
        :src="item"
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    commentInfo: {
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

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style scoped>
.img img {
  width: 100%;
}
.comment {
  padding: 5px 0 20px;
  border-bottom: 5px solid #f2f5f8;
}
</style>
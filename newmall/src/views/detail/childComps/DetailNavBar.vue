<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: currentIndex === index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },

  components: {
    NavBar,
  },

  methods: {
    //返回功能
    backClick() {
      this.$router.back();
    },
    //点击切换样式
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
/* 当前浏览器不支持scoped的用法，所以同名的样式名会复用 */
.title {
  display: flex;
}
.title-item {
  flex: 1;
  color: #666;
  font-size: 13px;
}
.back img {
  margin-top: 10px;
}
.active {
  color: rgb(13, 117, 214);
}
.detail-nav-bar {
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
</style>
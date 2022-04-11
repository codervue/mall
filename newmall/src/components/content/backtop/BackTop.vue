<template>
  <div class="back-top" @click="backClick" v-show="isShow">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      isShow: false,
      isScroll: 0,
    };
  },
  mounted() {
    //监听滚动距离
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {},

  methods: {
    //返回顶部
    backClick() {
      document.documentElement.scrollTop = 0;
    },
    //滚动执行函数
    handleScroll() {
      // handleScroll 和 methods 是同级
      if (window.pageYOffset > 1000) {
        //window.pageYOffset:获取滚动距离
        //返回顶部图标的显示与隐藏
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      //获取滚动高度
      let clientHeight = document.documentElement.clientHeight; //浏览器高度固定的
      let scrollHeight = document.body.scrollHeight; //body高度随CSS改变，可滚动的内容高度
      let scrollTop = document.documentElement.scrollTop; //body到浏览器高度可变的
      let distance = -43; //可滚动内容减少44px所以整体减去44px
      if (scrollTop + clientHeight >= scrollHeight - distance) {
        //发出滚动事件
        this.$emit("lodeMore");
      }
    },
  },
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 7px;
  bottom: 56px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>
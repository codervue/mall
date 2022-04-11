import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import VueLazyload from 'vue-lazyload'
import { Swipe, SwipeItem, Toast } from 'vant';

//图片懒加载
Vue.use(VueLazyload, {
    loading: require("./assets/img/common/placeholder.png")
})

Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
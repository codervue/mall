import Vue from "vue"
import VueRouter from "vue-router"

//使用路由
Vue.use(VueRouter)

//创建对象
const routes = [
    //配置映射关系
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: () =>
            import ("@/views/home/Home"),
        //导入需要钩子函数
    },
    {
        path: "/category",
        component: () =>
            import ("@/views/category/Category")
    },
    {
        path: "/shopcart",
        component: () =>
            import ("@/views/shopcart/Shopcart")
    },
    {
        path: "/profile",
        component: () =>
            import ("@/views/profile/Profile")
    },
    {
        path: "/detail/:iid",
        component: () =>
            import ("@/views/detail/Detail")
    },
]

const router = new VueRouter({
    routes,
    mode: "history" //去除#
})
export default router
//导入Vuex
import Vue from "vue"
import Vuex from "vuex"

//使用Vuex
Vue.use(Vuex)

//创建Vuex实例对象
const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, info) {
            //查看数组中是否有相同id
            const oldInfo = state.cartList.find(item => item.iid === info.iid)
                //如果有,count+1,如果没有，添加到数组cartlist中
            if (oldInfo) {
                oldInfo.count += 1
            } else {
                info.count = 1
                info.checked = true
                state.cartList.push(info)
            }

        }
    }

})

export default store
import { request } from "./request"

//封装网络请求函数
export function getHomeMultidata() {
    //调用request传入地址栏home参数
    return request({
        url: "/home/multidata"
    })
}
export function getHomeGoods(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    })
}
import axios from "axios"

//构造函数
export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 5000
    })

    //2.拦截器的使用
    //2.1请求拦截器
    instance.interceptors.response.use(config => {
        return config
    })

    //2.2响应拦截器的使用
    instance.interceptors.response.use((res) => {
            //请求成功拿到数据
            return res.data
        },
        err => {
            //请求失败打印失败结果
            console.log(err);
        }
    )

    //发送真正的网络请求
    return instance(config)
}
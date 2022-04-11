module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "assets": "@/assets",
                "components": "@/components",
                "views": "@/views",
                "network": "@/network"
            }
        }
    },
    lintOnSave: false,
    devServer: {
        //手机连接电脑热点即可访问，ip地址通过ipconfig查看
        host: '192.168.0.112',
        port: 8080,
        https: false,
        open: false,
        proxy: null
    }
}
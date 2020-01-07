/**
 * cli3.0 以上因为webpack的配置均被隐藏了，当你需要覆盖原有的配置时，
 * 则需要在项目的根目录下，新建vue.config.js文件，来配置新的配置。
 */
module.exports = {
    devServer: {
        // 是否自动弹出浏览器页面
        open: true,
        // 设置为0.0.0.0则所有的地址均能访问 
        host: '0.0.0.0',
        // 端口
        port: '8888',
        https: false,
        hotOnly: false,

        // 代理配置
        proxy: {
            '/proxyApi': {
                // 后端接口地址
                target: 'http://localhost:8090',
                // 代理 websockets
                ws: true,
                changeOrigin: true,
                // 重写路径,把 proxyApi 去掉
                pathRewrite: {
                    '^/proxyApi': ''
                }
            }
        },
    }
}
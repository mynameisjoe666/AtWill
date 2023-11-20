const path = require("path");
module.exports = {
    runtimeCompiler: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '经理人'
                return args
            })
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./default.less")]
        }
    },
    devServer: {
        // development server port 8000
        port: 80,
        proxy: {
            '/api': {
                target: 'http://192.168.31.210:8201/', // 测试
                // target: 'http://39.100.200.231:8201/', // 测试
                // target: 'http://gateway.com:8201',
                pathRewrite: {'^/api': ''},
                ws: false,
                changeOrigin: true
            }
        },
        disableHostCheck: true
    },
};

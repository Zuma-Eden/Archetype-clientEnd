const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    
    // 什么用来着 ? 具体细节忘了
    //publicPath:'./',
    configureWebpack: config => {
        //生产环境取消 console.log
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@views', resolve('src/views'))
            .set('@static', resolve('src/static'))
            .set('@assets', resolve('src/assets'))
            .set('@plugins', resolve('src/plugins'))
            .set('@components', resolve('src/components'))
        
    },
    
    devServer: {
        port: 1234,
        progress:true,
        compress:true,
    },
}
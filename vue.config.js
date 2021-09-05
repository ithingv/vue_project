module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch'); // prefix 삭제
    }
}
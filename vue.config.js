// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: './', // 默认'/'，部署应用包时的基本 URL
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: '', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: IS_PROD,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://10.38.164.248:8123/',
        ws: true,
        changeOrigin: false,
        headers: { host: 'mp.xiaomi.com' }
      }
    }
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('layout', resolve('src/layout'))
      .set('base', resolve('src/base'))
      .set('views', resolve('src/views'))
      .set('static', resolve('src/static'));
  }
};

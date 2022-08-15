const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './src-cordova/www',
  publicPath: './',

  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
})

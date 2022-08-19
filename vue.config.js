const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './src-cordova/www',
  publicPath: '/', //* anciennement "./", soit disant pour android
  

  pluginOptions: {
    cordovaPath: 'src-cordova'
  }
})

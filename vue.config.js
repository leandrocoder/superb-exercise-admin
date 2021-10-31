module.exports = {
  runtimeCompiler: false,
  productionSourceMap: false,
  publicPath: "./",

  css: {
    extract: false,
    sourceMap: false
  },

  configureWebpack: {
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    },
    optimization: {
      namedChunks: true,
      splitChunks: false,
    }
  },

  devServer: {
    https: false,
    //port: 8080
  },

  transpileDependencies: [
    'vuetify'
  ]
}

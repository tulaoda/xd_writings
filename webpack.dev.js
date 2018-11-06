const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const webpack = require('webpack')
const config = merge(common, {
  devtool: "inline-source-map",

  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // contentBase: './src',
    inline: true,
    host: 'localhost',
    overlay: {
      error: true // 在页面显示错误
    },
    port: 9000,
    hot: true, // 只对组件进行修改，不刷新全部页面
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(), //热替换
  ]

})
module.exports = config
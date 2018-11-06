const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 通过 npm 安装
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin') // 按需导入
var OpenBrowserPlugin = require('open-browser-webpack-plugin') // 自动打开浏览器插件
const moment = require('moment')

// 判断是否是dev
// const isDev = process.env.NODE_ENV === 'development'

// 打包时间戳
const time = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(`

/**
                  ┌─┐       ┌─┐                           
               ┌──┘ ┴───────┘ ┴──┐                        
               │                 │                        
               │       ───       │                        
               │  ─┬┘       └┬─  │                        
               │                 │                        
               │       ─┴─       │                        
               │                 │                        
               └───┐         ┌───┘                        
                   │         │                            
                   │         │                            
                   │         │                            
                   │         └──────────────┐             
                   │                        │             
                   │                        ├─┐           
                   │                        ┌─┘           
                   │                        │             
                   └─┐  ┐  ┌───────┬──┐  ┌──┘             
                     │ ─┤ ─┤       │ ─┤ ─┤                
                     └──┴──┘       └──┴──┘                
                         神兽保佑                         
                         代码无BUG!                       
              @宋鑫鑫 (coderaxin@163.com)                
              Build Time： ${time}   ( *¯ ꒳¯*)!!         
        **/

`)

const config = {
  mode: 'development',
  // 页面入口文件配置
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: `js/[name].js`,
    chunkFilename: `js/[name].js`
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [{
        test: /\.(tsx|ts|js|jsx)$/,
        loader: 'awesome-typescript-loader',
        options: {
          // 按需加载 ts 文件
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd-mobile',
              style: false
            })]
          })
        },
        exclude: /node_modules/
      }, {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: [
          'url-loader?limit=100000&name=[path][name].[ext]',
          // 'image-webpack-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },

          {
            loader: 'sass-loader'
          }
        ]
      }
      // {
      //   test: /\.(png|jpg|gif|svg)$/i,
      //   use: [
      //     'file-loader'
      //   ]
      // }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: isDev ? '"development"' : '"production"'
    //   }
    // }),
    new MiniCssExtractPlugin({
      filename: `css/style.css`,
      chunkFilename: 'css/vendors.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      minify: true,
      vconsole: `
      <script>  (function () {

        const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
        const htmlDOM = document.getElementsByTagName('html')[0]
        htmlDOM.style.fontSize = htmlWidth / 10 + 'px'
    
        window.addEventListener('resize', (e) => {
            const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    
            htmlDOM.style.fontSize = htmlWidth / 10 + 'px'
        })
    })
    () </script>`
    }),
    new CleanWebpackPlugin(['dist']), // 清理打包后的文件
    // new OpenBrowserPlugin({
    //   url: 'http://localhost:9000'
    // })

  ]
  // 加载器配置
}

module.exports = config
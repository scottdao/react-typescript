/* eslint-disable no-undef */

const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
module.exports = merge(common, {
  devtool: "inline-source-map",
  output: {
    //出口文件

    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8088,
    inline: true,
    host: "192.168.100.240",
    // host: "127.0.0.1",
    historyApiFallback: true,
    noInfo: false,
    proxy: {
      //通过代理解决本地跨域
      "/api": {
        target: "http://api.wawa.kinlink.cn/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/" //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
          // 比如我要调用'http://0.0:300/user/add'，直接写‘/api/user/add’即可 代理后地址栏显示/
        }
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin() //不与--hot共用，预防热更新性能问题
  ]
});

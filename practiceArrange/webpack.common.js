/* eslint-disable no-undef */
const path = require("path");
//console.log(path)
const webpack = require("webpack");
//console.log(webpack)
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;
module.exports = {
  entry: {
    app: ["./src/index.tsx"],
    antd: ["antd-mobile"],
    common: ["babel-polyfill", "whatwg-fetch"],
    lodash: ["lodash"]
  }, //入口文件

  resolve: {
    extensions: [".js", ".tsx", ".ts", ".json"],
    alias: {
      Component: path.resolve(__dirname, "src/component/"), //代替模块路径
      Style: path.resolve(__dirname, "src/style/"),
      Router: path.resolve(__dirname, "src/router/"),
      Ts: path.resolve(__dirname, "src/ts/"),
      Image: path.resolve(__dirname, "src/image/"),
      "@": path.resolve(__dirname, "src/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)$/,
        use: {
          loader: "ts-loader" //Rule.use可以是应用于模块的UseEntry数组。每个条目指定要使用的加载器。
        },
        exclude: /node_modules/ //条件必须不匹配
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            limit: 2048,
            name: path.posix.join("img/[name].[hash:8].[ext]")
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      favicon: __dirname + "/public/favicon.ico",
      manifest: __dirname + "/public/manifest.json"
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      //引入成为全局模块
      // $$: "jquery",
      // jquery: "jquery",
      // "window.jquery": "jquery",
      _: "lodash"
    }),
    new webpack.DefinePlugin({
      //设置全局常量

      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

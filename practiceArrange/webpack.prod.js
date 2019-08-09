const webpack = require('webpack');
 const merge = require('webpack-merge');
 //const ImageminPlugin = require('imagemin-webpack-plugin').default
 const common = require('./webpack.common.js');
 const MinExtractTextPlugin = require('mini-css-extract-plugin');
 const path = require('path')
 module.exports = merge(common, {
     devtool: 'source-map',
	 output: { //出口文件
	     //filename: '[name].build.js',
	     filename: 'js/[name].[chunkhash].js',
	     path: path.resolve(__dirname, 'dist'),
	     chunkFilename: 'js/[name].js'
	 },
     module: {
         rules: [{
             test: /\.(css|scss)$/,
             use: [ {
					loader: MinExtractTextPlugin.loader,
					
				  },
				  'css-loader',
				  'postcss-loader',
				  'sass-loader']
			}]
     },
     optimization: { //代码分割插件
         minimize: true,
         splitChunks: {
           
             cacheGroups: {
                 vendors: {
                     //抽离第三方插件
					  test: /node_modules/, //指定是node_modules下的第三方包
					    chunks: 'initial', //all对所有文件处理，async异步导入文件处理，initial只对入口文件处理。
					  minSize: 0,//只要超出0字节就生成一个新包
					  minChunks: 2,//最小引用2次
					  
					  name: 'vendor', //打包后的文件名，任意命名
					  priority: 10 //设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                 },
               
             }

         }
     },
     plugins: [
         new webpack.HashedModuleIdsPlugin(),
        new MinExtractTextPlugin({
      
      filename: '[name].[hash].css',
      chunkFilename:'[id].[hash].css',
    }),

     ]
 });
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack-base-config');

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
  },
  devServer: {
    compress: true, // 开启gzip压缩
    contentBase: path.join(__dirname, '../dist'), // 打包文件目录
    port: '8888',
    host: '0.0.0.0',
  },
});

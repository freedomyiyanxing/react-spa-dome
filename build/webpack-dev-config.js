const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack-base-config');

// 在入口注入热更新
Object.keys(webpackBaseConfig.entry).forEach((name) => {
  webpackBaseConfig.entry[name].push('react-hot-loader/patch');
});

module.exports = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
  },
  plugins: [
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: '8888',
    host: '0.0.0.0',
    hot: true,
    overlay: {
      errors: true
    },
    compress: true, // 开启gzip压缩
    contentBase: path.join(__dirname, '../dist'), // 打包文件目录
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: path.join(__dirname, '../node_modules'),
        use: [
          'thread-loader',  // 加速编译
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]-[local]-[hash:base64:5]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'my-custom-hash',
              }
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
          'less-loader',
        ]
      },
    ],
  }
});

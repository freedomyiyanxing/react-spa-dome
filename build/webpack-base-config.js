const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const utils = require('./utils');

module.exports = {
  entry: {
    app: [utils.resolve('src/App.jsx')],
  },
  output: {
    path: path.join(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 省略文件后缀名;
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: path.join(__dirname, '../node_modules'), // 排除路径,
        include: path.resolve(__dirname, '../src'), // 精确需要处理的路径,
        use: [
          'thread-loader',  // 加速编译
          'cache-loader', // 缓存
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              configFile: path.join(__dirname, '../babel/babel.js'),
            },
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: path.join(__dirname, '../node_modules'), // 排除路径,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 500,
            outputPath: 'images',
          }
        }]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        exclude: path.join(__dirname, '../node_modules'), // 排除路径,
        loader: 'file-loader',
        options: {
          options: {
            limit: 500,
            outputPath: 'font',
          }
        }
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
    }),
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, '..'),
      //包含 content 和 name 的对象，或者在编译时(compilation)的一个用于加载的 JSON manifest 绝对路径
      manifest: require('./vendor-manifest.json'),
    }),
    new CopyWebpackPlugin([ // 复制
      {
        from: path.join(__dirname, '../static'),
        to: path.join(__dirname, '../dist'),
      }
    ])
  ],
};

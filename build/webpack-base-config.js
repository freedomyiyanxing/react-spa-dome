const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const utils = require('./utils');
module.exports = {
  entry: {
    app: [utils.resolve('src/App.jsx')],
  },
  output: {
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: [
          // loader: 'babel-loader',
          // options: {},
        ],
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html'),
    })
  ],
}

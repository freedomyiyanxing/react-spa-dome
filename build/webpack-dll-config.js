const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'react', 'react-dom', 'prop-types', 'react-helmet', 'react-router-dom', 'uuid', '@loadable/component',
    ],
  },
  output: {
    path: path.join(__dirname, '../static/js'),
    filename: '[name].dll.js',
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '.', '[name]-manifest.json'), // vendor-manifest.json 输出在当前目录下
      name: '[name]_library', // 暴露出的函数名, 同 output.library 一致即可,
      context: path.join(__dirname, '..'), // manifest 文件中请求的上下文(context)(默认值为 webpack 的上下文(context))
    })
  ]
};

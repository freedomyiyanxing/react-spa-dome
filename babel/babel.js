const presets = [
  [
    "@babel/preset-env",
    {
      // 'useBuiltIns': 'entry',
      'targets': { // 设置 "chrome": "58", "ie": "11" 把es6解析成es5 (最主要解决 babel无法转换某些Es6的语法, 比喻const...)
        'chrome': '58',
        'ie': '11',
      },
    }
  ],
  '@babel/preset-react',
];

const env = {
  'development': {
    'plugins': ['react-hot-loader/babel']
  }
};

module.exports = {
  presets, env,
};

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/home/home';

const root = document.getElementById('root');

const App = () => (
  <Home />
);

ReactDOM.render(<App />, root);

// 告诉 webpack 允许此模块的热更新
// 热更新
if (module.hot) {
  module.hot.accept();
}

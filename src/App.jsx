import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';

import routers from './router/index';

const root = document.getElementById('root');

const App = () => (
  <BrowserRouter>
    <Link to="/">首页</Link>
    <Link to="/product">产品列表</Link>
    <Switch>
      {
        routers.map(items => (
          <Route {...items} />
        ))
      }
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, root);

// 告诉 webpack 允许此模块的热更新
// 热更新
if (module.hot) {
  module.hot.accept();
}

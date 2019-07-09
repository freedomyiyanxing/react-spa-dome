import uuid from 'uuid';
import loadable from '@loadable/component';

const Home = loadable(() => import('../components/home/home'));
const Product = loadable(() => import('../components/product/index'));

const routers = [
  {
    key: uuid(),
    path: '/',
    component: Home,
    exact: true,
  },
  {
    key: uuid(),
    path: '/product',
    component: Product,
    exact: true,
  },
];

export default routers;

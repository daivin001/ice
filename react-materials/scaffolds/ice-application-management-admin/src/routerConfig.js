// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import Account from './pages/Account';
import Query from './pages/Query';
import BasicLayout from './layouts/BasicLayout';
import Detail from './pages/Detail';
import History from './pages/History';
import UserLogin from './pages/UserLogin';
import Home from './pages/Home';

const routerConfig = [
  {
    path: '/dashboard',
    component: Home,
  },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/query',
    layout: BasicLayout,
    component: Query,
  },
  {
    path: '/detail',
    layout: BasicLayout,
    component: Detail,
  },
  {
    path: '/history',
    layout: BasicLayout,
    component: History,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
];

export default routerConfig;

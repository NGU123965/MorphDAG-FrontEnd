import { lazy } from 'ice';
import BasicLayout from '@/layouts/BasicLayout';

const Mainpage = lazy(() => import('@/pages/Mainpage'));
const Analysis = lazy(() => import('@/pages/Analysis'));
const Workplace = lazy(() => import('@/pages/Workplace'));
const Function1 = lazy(() => import('@/pages/Function1'));
const About = lazy(() => import('@/pages/About'));

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/dashboard/mainpage',
        component: Mainpage,
      },
      {
        path: '/dashboard/analysis',
        component: Analysis,
      },
      {
        path: '/dashboard/workplace',
        component: Workplace,
      },
      {
        path: '/dashboard/function1',
        component: Function1,
      },
      {
        path: '/dashboard/about',
        component: About,
      },
      {
        path: '/',
        redirect: '/dashboard/mainpage',
      },
    ],
  },
];
export default routerConfig;

import React from 'react';
import { RouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('home/Home'));
// import { rules } from 'home/utils';
console.log('Home', Home);
// rules();
interface CustomRouteProps extends Omit<RouteProps, 'element'> {
  element: React.ReactNode;
}

const routes: CustomRouteProps[] = [
  {
    path: '/',
    element: <Home />,
  },
];

export default routes;

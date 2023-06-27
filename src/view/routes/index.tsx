import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Home from './home';

const routes = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default routes;

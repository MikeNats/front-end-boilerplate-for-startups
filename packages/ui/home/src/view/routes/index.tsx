import React from 'react';
import { createHashRouter } from 'react-router-dom';
import Home from './Home';

const routes = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default routes;

import React from 'react';
import routes from './';
import {theme} from '../../../../common';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { ErrorBoundary } from '../../../../common';

const Shell: React.FC = () => (
  <div>
    <React.StrictMode>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <React.Suspense fallback={'Loading'}>
            <BrowserRouter>
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </BrowserRouter>
          </React.Suspense>
        </ThemeProvider>
      </ErrorBoundary>
    </React.StrictMode>
  </div>
);

export default Shell;

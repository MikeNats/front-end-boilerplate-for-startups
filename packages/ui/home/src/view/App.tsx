import React from 'react';
import routes from './routes';
import theme from './theme';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

const App: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
const root = rootElement ? createRoot(rootElement) : null;

root?.render(<App />);

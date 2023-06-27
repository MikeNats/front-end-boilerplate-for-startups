import React from 'react';
import routes from 'view/routes';
import theme from 'view/theme';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

const App: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>
);

export default App;

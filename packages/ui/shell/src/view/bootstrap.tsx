import React from 'react';
import { createRoot } from 'react-dom/client';
import Shell from './routes/Shell';

const rootElement = document.getElementById('root');
const root = rootElement ? createRoot(rootElement) : null;
root?.render(<Shell />);

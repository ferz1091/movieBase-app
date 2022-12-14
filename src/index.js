// Core
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';

// Components
import { App } from './view';

// Styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

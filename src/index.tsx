import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import makeServer from './server';

makeServer();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

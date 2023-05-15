import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomeContainer } from './containers/';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>
);

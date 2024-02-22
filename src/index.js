// Во index.js
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';


const ShopContextProvider = lazy(() => import('./Context/ShopContext'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

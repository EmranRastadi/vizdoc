import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { store } from './store';
import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});
ReactDOM.render(
  <CacheProvider value={cacheRtl}>
    <Provider store={store}>
      <App />
    </Provider>
  </CacheProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

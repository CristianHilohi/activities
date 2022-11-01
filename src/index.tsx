import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./Store/store";
import {ThemeProvider} from "@mui/material";
import {theme} from './theme/themeConfig';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();

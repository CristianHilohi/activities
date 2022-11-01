import React from 'react';
import ReactDOM from 'react-dom/client';
import './theme/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from "./Store/store";
import {ThemeProvider} from "@mui/material";
import {theme} from './theme/themeConfig';
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Auth0Provider
                    domain="dev-5rdeuqv0k6e13w2w.us.auth0.com"
                    clientId="uB2r8R3sy3vz5yHkm5WweZ7JmF0dOP4t"
                    redirectUri={window.location.origin}
                >
                    <App/>
                </Auth0Provider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();

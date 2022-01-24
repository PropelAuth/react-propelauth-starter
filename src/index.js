import {AuthProvider} from "@propelauth/react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider authUrl={process.env.REACT_APP_PROPELAUTH_AUTH_URL}>
            <App/>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

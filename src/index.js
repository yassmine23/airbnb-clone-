import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppThemeProvider from './themes/AppThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'font-awesome/css/font-awesome.min.css'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppThemeProvider>
    <App />
  </AppThemeProvider>
);

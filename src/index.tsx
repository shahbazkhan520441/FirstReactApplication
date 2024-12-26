import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import { reportWebVitals } from './reportWebVitals';

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call reportWebVitals function
// reportWebVitals(console.log); // Logs the web vitals metrics

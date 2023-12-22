// Import necessary React modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import styles and components
import './index.css';
import App from './App';

// Import the function to report web vitals
import reportWebVitals from './reportWebVitals';

// Create a root for rendering React elements
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within a StrictMode wrapper for development features
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals to analyze the performance of the web application
reportWebVitals();

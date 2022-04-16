import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
console.log(process.env.REACT_APP_GITHUB);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_GITHUB ? "/nlp-projects/" : undefined}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles, blueTheme } from './themes/ThemeConfig';
import { ThemeProvider } from 'styled-components';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={blueTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

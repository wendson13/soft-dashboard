import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './mirage';

if (import.meta.env.DEV) {
  makeServer({ environment: "development" })
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

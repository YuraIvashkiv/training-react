import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
// import { StateExample } from 'components/StateExample/StateExample';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    success: 'green',
    warning: 'orange',
    error: 'red',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      {/* <StateExample/> */}
    </ThemeProvider>
  </React.StrictMode>
);

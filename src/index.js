import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// third party
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {AppProvider} from './pages/context/context.jsx';
// import config from './config';

import { ProSidebarProvider } from "react-pro-sidebar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

{/* <AppProvider> */}
    {/* <Provider> */}
    {/* <ProSidebarProvider> */}
      <App />
    {/* </ProSidebarProvider> */}
    {/* </Provider> */}
 {/* </AppProvider>  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { MongoDBAuthProvider } from './Components/MongoDBAuthContext/AuthContext';
import { ProductProvider } from './ApiIntegration/CoursesApi/CoursesApi';
import { GoogleOAuthProvider } from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MongoDBAuthProvider>
     <ProductProvider>
     <GoogleOAuthProvider clientId="561696235167-1n5kcj8u8tdn4gvim49d192oj777a2ab.apps.googleusercontent.com"><App/></GoogleOAuthProvider>
     </ProductProvider>
    </MongoDBAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

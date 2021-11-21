import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FooterContextProvider from './contexts/FooterContext';
import AuthContextProvider  from "./contexts/AuthContext"
import AmountContextProvider from './contexts/AmountContext'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FooterContextProvider>
        <AmountContextProvider>
            <App />
        </AmountContextProvider>
      </FooterContextProvider>
      </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

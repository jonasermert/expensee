import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import FooterContextProvider from './contexts/FooterContext';
import AuthContextProvider from './contexts/AuthContext';
import AmountContextProvider from './contexts/AmountContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <FooterContextProvider>
        <AmountContextProvider>
          <App />
        </AmountContextProvider>
      </FooterContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);

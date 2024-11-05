import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes.jsx';
import AuthProvider from './Component/AuthProvider/AuthProvider.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={Routes}>
          <App />
        </RouterProvider>

      </AuthProvider>
    </HelmetProvider>
       
  </StrictMode>,
)

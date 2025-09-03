import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import AuthProvider from './Components/ContextApi/AuthProvider.jsx';
// import UploadDestinationProvider from './Components/ContextApi/UploadDestinationProvider.jsx';

// import UploadDestinationProvider from './Components/ContextApi/ManageDestinationsProvider.jsx';
import ManageDestinationsProvider from './Components/ContextApi/ManageDestinationsProvider.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AdminProvider from './Components/ContextApi/AdminProvider.jsx';
import StripeProvider from './Components/ContextApi/StripeGateway/StripeProvider.jsx';
import ProtectedRoute from './Components/ContextApi/ProtectedRoute.jsx';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <ProtectedRoute>
    <StripeProvider>

    <GoogleOAuthProvider clientId={clientId} >
    <AuthProvider>
      <AdminProvider>

      <ManageDestinationsProvider>
    <App />
      </ManageDestinationsProvider>
      </AdminProvider>
    </AuthProvider>
    </GoogleOAuthProvider>
    </StripeProvider>
    </ProtectedRoute>
    </BrowserRouter>
  </StrictMode>,
)

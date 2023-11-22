import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
  domain="dev-osku82bfjwi73v1x.us.auth0.com"
  clientId="96Fbf15VH0GHSgFl5KFvl991Rq31SEqB"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
     <BrowserRouter>
     <App/>
     </BrowserRouter>
     </Auth0Provider>,
  </React.StrictMode>,
)

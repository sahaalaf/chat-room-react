import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider  } from '@react-oauth/google'
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='940663274515-aict9hkkq0hau2drcvmk3c4kr57sbk6c.apps.googleusercontent.com'>
    <App />
  </GoogleOAuthProvider>


)

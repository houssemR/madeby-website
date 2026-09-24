import React from 'react'
import ReactDOM from 'react-dom/client'
// Base layer first. Importing it after App.jsx put index.css last in the
// bundle, so `.btn { display: inline-flex }` beat `.nav-cta { display: none }`
// and the desktop button stayed on screen at phone width.
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

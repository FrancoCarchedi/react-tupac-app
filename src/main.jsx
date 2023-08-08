import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Importa el archivo CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa el archivo JavaScript de Bootstrap (solo si necesitas componentes interactivos)
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

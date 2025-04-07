import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './static/basic.css'
import App from './App.jsx'
import Index  from './index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Index></Index>
    </BrowserRouter>
  </StrictMode>,
)

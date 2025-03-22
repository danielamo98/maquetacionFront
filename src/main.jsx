import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComponentePrincipal from './assets/ContenedorPrincipal'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentePrincipal/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Decoracao from './components/Decoracao'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Decoracao verdade={true}/>
  </StrictMode>,
)

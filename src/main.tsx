import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Container from './Components/Container.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container />
  </StrictMode>,
)

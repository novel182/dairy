import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import AppRoutes from 'utils/AppRoutes'
import CartProvider from './contexts/CartProvider'
import { APIProvider } from '@vis.gl/react-google-maps'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <AppRoutes />
        </APIProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)

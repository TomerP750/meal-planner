import { createRoot } from 'react-dom/client'
import './index.css'
import { MainLayout } from './layouts/MainLayout/MainLayout.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>,
)

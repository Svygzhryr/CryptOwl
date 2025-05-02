import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.css'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './utils/errorBoundary.tsx'
import { App } from './components/app/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)

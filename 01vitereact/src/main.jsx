import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chai from './Chai.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Chai />
    <App />
    <h2>Using fragment</h2>
  </>,
)

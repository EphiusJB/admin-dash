import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

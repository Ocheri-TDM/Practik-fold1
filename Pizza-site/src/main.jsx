import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import './assets/css/client.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from "./utils/CartContext.jsx";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>,
)

import { createRoot } from 'react-dom/client'
import { BrowserRouter as  BrowserRouter } from "react-router-dom";
import App from './App.jsx'
// import './'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

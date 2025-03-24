import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App.jsx';

const initialClients = [
  { id: 1, name: "Marcio Pereira Alvez", email: "marcio12pereira@gmail.com", telephone: "(27) 992617-114" },
  { id: 2, name: "Mariana Silva", email: "mariana.silva@example.com", telephone: "(27) 992017-122" },
];

const initialProducts = [
  { id: 1, name: "Smartwatch Pro", stock: 50, price: "$159.99" },
  { id: 2, name: "10'' Tablet 128GB", stock: 20, price: "$299.99" },
];

if (!localStorage.getItem('clients')) {
  localStorage.setItem('clients', JSON.stringify(initialClients));
}

if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify(initialProducts));
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
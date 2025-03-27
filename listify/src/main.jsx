import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App.jsx';


// dados iniciais 
const initialClients = [
  { id: 1, name: "Marcio Pereira Alvez", email: "marcio12pereira@gmail.com", telephone: 27992617114 },
  { id: 2, name: "Mariana Silva", email: "mariana.silva@example.com", telephone: 27992017122 },
];

const initialProducts = [
  { id: 1, name: "Smartwatch Pro", stock: 50, price: 160},
  { id: 2, name: "10'' Tablet 128GB", stock: 20, price: 300 },
];

// verifica se existe algum dado armazenado com as chaves
if (!localStorage.getItem('clients')) { 
  localStorage.setItem('clients', JSON.stringify(initialClients)); // se não existir armazena os dados iniciais de clientes
}

if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify(initialProducts)); // de produtos
}

// renderizção da aplicação
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
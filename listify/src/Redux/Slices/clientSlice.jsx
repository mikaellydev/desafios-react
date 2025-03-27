import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; // função para criar ids únicos

// carregamento inicial de dados, para que os dados começe com os dados salvos no localsorage
const loadClientsFromLocalStorage = () => {
  const clients = localStorage.getItem('clients'); // verifica se tem dados com a chave clientes
  return clients ? JSON.parse(clients) : []; // se for converte para um objeto js, se não para um array vazio
};

// estado inicial
const initialState = {
  clients: loadClientsFromLocalStorage(), // clientes --> array que armazenará todos os clientes
};

const clientSlice = createSlice({
  name: 'client', // namespace para as actions 
  initialState, // estado inicial
  reducers: { // objeto contendo todas as operações de mudança de estado
    addClient: {
      reducer(state, action) {
        state.clients.push(action.payload);
        localStorage.setItem('clients', JSON.stringify(state.clients));
      },
      prepare(clientData) {
        return {
          payload: {
            id: uuidv4(), // <-- Geração do ID único aqui
            ...clientData // <-- Copia todos os outros dados do cliente
          }
        };
      }
    },
    editClient(state, action) {
      const index = state.clients.findIndex(client => client.id === action.payload.id); // encontra o cliente pelo id
      if (index !== -1) {
        state.clients[index] = action.payload; // subustitui os dados dos clientes
        localStorage.setItem('clients', JSON.stringify(state.clients)); // atualiza o localstorage
      }
    },
    deleteClient(state, action) {
      state.clients = state.clients.filter(client => client.id !== action.payload); // filtra os arrays removendo o cliente pelo id
      localStorage.setItem('clients', JSON.stringify(state.clients)); // atualiza no localstorage
    },
  },
});

export const { addClient, editClient, deleteClient } = clientSlice.actions;
export default clientSlice.reducer;
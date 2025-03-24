import { createSlice } from "@reduxjs/toolkit";

const loadClientsFromLocalStorage = () => {
  const clients = localStorage.getItem('clients');
  return clients ? JSON.parse(clients) : [];
};

const initialState = {
  clients: loadClientsFromLocalStorage(),
};

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    addClient(state, action) {
      state.clients.push(action.payload);
      localStorage.setItem('clients', JSON.stringify(state.clients)); 
    },
    editClient(state, action) {
      const index = state.clients.findIndex(client => client.id === action.payload.id);
      if (index !== -1) {
        state.clients[index] = action.payload;
        localStorage.setItem('clients', JSON.stringify(state.clients)); 
      }
    },
    deleteClient(state, action) {
      state.clients = state.clients.filter(client => client.id !== action.payload);
      localStorage.setItem('clients', JSON.stringify(state.clients)); 
    },
  },
});

export const { addClient, editClient, deleteClient } = clientSlice.actions;

export default clientSlice.reducer;
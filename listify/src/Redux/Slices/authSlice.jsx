import { createSlice } from "@reduxjs/toolkit"; // função para facilitar a criação da slice


// verifica se exite um usuário salvo com a chave 'user', para manter o usuário logado mesmo após recarregar a tela!
const loadUserFromLocalStorage = () => { 
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const initialState = {
  user: loadUserFromLocalStorage(), // armazena o  dados do usuário
  isAuthenticated: !!loadUserFromLocalStorage(), // indica se está autenticado
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload; // atualiza o estado do usuário
      state.isAuthenticated = true; // marca como autenticado
      localStorage.setItem('user', JSON.stringify(action.payload)); // salva no localStorage
    },
    registerSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null; // remove os dados do usuário do estado
      state.isAuthenticated = false; // marca como não autenticado
      localStorage.removeItem('user'); // limpa o localStorage
    },
  },
});

// Actions exportadadas para serem usadas em outros componentes
export const { 
  loginSuccess,
  registerSuccess,
  logout,
} = authSlice.actions;



export default authSlice.reducer;
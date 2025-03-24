import { createSlice } from "@reduxjs/toolkit";

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const initialState = {
  user: loadUserFromLocalStorage(),
  isAuthenticated: !!loadUserFromLocalStorage(), 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload)); 
    },
    registerSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem('user', JSON.stringify(action.payload)); 
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user'); 
    },
  },
});

export const { loginSuccess, registerSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
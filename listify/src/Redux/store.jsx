import { configureStore } from "@reduxjs/toolkit"; // função do redux toolkit que simplifica a criação do store

// importa os reducrs de cada slice do estado
import authReducer from './Slices/authSlice';
import clientReducer from './Slices/clientSlice';
import productReducer from './Slices/productSlice';
import modalReducer from './Slices/modalSlice';

export const store = configureStore({
    reducer: { // objeto que combina todos os reducers da aplicação

        // cada propriedade define um namespace no estado global
        auth: authReducer,
        client: clientReducer,
        product: productReducer,
        modal: modalReducer,
        },
});
import { configureStore } from "@reduxjs/toolkit";

import authReducer from './Slices/authSlice';
import clientReducer from './Slices/clientSlice';
import productReducer from './Slices/productSlice';
import modalReducer from './Slices/modalSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        client: clientReducer,
        product: productReducer,
        modal: modalReducer,
        },
});
import { createSlice } from "@reduxjs/toolkit";

const loadProductsFromLocalStorage = () => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : [];
};

const initialState = {
  products: loadProductsFromLocalStorage(),
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
      localStorage.setItem('products', JSON.stringify(state.products)); 
    },
    editProduct(state, action) {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        localStorage.setItem('products', JSON.stringify(state.products)); 
      }
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload);
      localStorage.setItem('products', JSON.stringify(state.products)); 
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; 

const loadProductsFromLocalStorage = () => {
  const products = localStorage.getItem('products'); // verifica se ja existe produtos salvos no localstorage
  return products ? JSON.parse(products) : [];
};

const initialState = {
  products: loadProductsFromLocalStorage() // array que vai armazenar todos os produtos
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.products.push(action.payload);
        localStorage.setItem('products', JSON.stringify(state.products));
      },
      prepare(productData) {
        return {
          payload: {
            id: uuidv4(), // gera o id único
            ...productData //add o id na lista de produtos
          }
        };
      }
    },
    editProduct(state, action) {
      const index = state.products.findIndex(product => product.id === action.payload.id); // encontrar o produto pelo id
      if (index !== -1) {
        state.products[index] = action.payload; // atualizar os dados dos produtos
        localStorage.setItem('products', JSON.stringify(state.products)); // atualiza o localstorage
      }
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload); // filtra o array
      localStorage.setItem('products', JSON.stringify(state.products)); // atualiza o localstorage
    },
  },
});

export const { addProduct, editProduct, deleteProduct } = productSlice.actions; 
export default productSlice.reducer;
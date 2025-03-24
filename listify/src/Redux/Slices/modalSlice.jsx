import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAddClientModal: false,
  showEditClientModal: false,
  showDeleteClientModal: false,
  showAddProductModal: false,
  showEditProductModal: false,
  showDeleteProductModal: false,
  itemToEdit: null, 
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleAddClientModal(state) {
      state.showAddClientModal = !state.showAddClientModal;
    },
    toggleEditClientModal(state) {
      state.showEditClientModal = !state.showEditClientModal;
      if (!state.showEditClientModal) {
        state.itemToEdit = null; 
      }
    },
    toggleDeleteClientModal(state) {
      state.showDeleteClientModal = !state.showDeleteClientModal;
      if (!state.showDeleteClientModal) {
        state.itemToEdit = null; 
      }
    },
    toggleAddProductModal(state) {
      state.showAddProductModal = !state.showAddProductModal;
    },
    toggleEditProductModal(state) {
      state.showEditProductModal = !state.showEditProductModal;
      if (!state.showEditProductModal) {
        state.itemToEdit = null; 
      }
    },
    toggleDeleteProductModal(state) {
      state.showDeleteProductModal = !state.showDeleteProductModal;
      if (!state.showDeleteProductModal) {
        state.itemToEdit = null; 
      }
    },
    setItemToEdit(state, action) {
      if (action.payload) {
        state.itemToEdit = action.payload; 
      }
    },
    clearItemToEdit(state) {
      state.itemToEdit = null; 
    },
  },
});

export const {
  toggleAddClientModal,
  toggleEditClientModal,
  toggleDeleteClientModal,
  toggleAddProductModal,
  toggleEditProductModal,
  toggleDeleteProductModal,
  setItemToEdit,
  clearItemToEdit, 
} = modalSlice.actions;

export default modalSlice.reducer;
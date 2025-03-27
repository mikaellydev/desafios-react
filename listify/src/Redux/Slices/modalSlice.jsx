import { createSlice } from '@reduxjs/toolkit';

// controla a visibilidade de cada modal
const initialState = {
  showAddClientModal: false,
  showEditClientModal: false,
  showDeleteClientModal: false,
  showAddProductModal: false,
  showEditProductModal: false,
  showDeleteProductModal: false,
  showLogoutModal: false,
  itemToEdit: null, // armazena o item que será editado ou excluído
};

// altera o estado de visualização dos modais
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
        state.itemToEdit = null; // limpa o itemToEdit
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
      state.itemToEdit = action.payload; // armazena o item que será editado ou excluido
    },
    clearItemToEdit(state) {
      state.itemToEdit = null; // limpa a refência do item
    },
    toggleLogoutModal(state) {
      state.showLogoutModal = !state.showLogoutModal;
    },
  },
});


// Exporta todas as actions para serem usadas nos componentes
export const {
  toggleAddClientModal,
  toggleEditClientModal,
  toggleDeleteClientModal,
  toggleAddProductModal,
  toggleEditProductModal,
  toggleDeleteProductModal,
  setItemToEdit,
  clearItemToEdit,
  toggleLogoutModal,
} = modalSlice.actions;

export default modalSlice.reducer;
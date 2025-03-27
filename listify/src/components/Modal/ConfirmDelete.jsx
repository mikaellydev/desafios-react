import React from 'react';
import { Button } from '@mui/material';
import ModalContainer from './ModalContainer';
import { useDispatch, useSelector } from 'react-redux';
import { 
  toggleDeleteClientModal, 
  toggleDeleteProductModal,
  clearItemToEdit
} from '../../Redux/Slices/modalSlice';
import { deleteClient } from '../../Redux/Slices/clientSlice';
import { deleteProduct } from '../../Redux/Slices/productSlice';

function ConfirmDelete() {
  const dispatch = useDispatch(); // diapara as actions do redux
  const {
    showDeleteClientModal,
    showDeleteProductModal,
    itemToEdit
  } = useSelector(state => state.modal); // acessa os estados dos modais e do item a ser deletado

  const open = showDeleteClientModal || showDeleteProductModal; // determina se o modal deve ser visivel
  const type = showDeleteClientModal ? 'client' : 'product'; // define o tipo de item a ser editado

  // fecha o modal baseado em qual está aberto
  const handleClose = () => {
    if (showDeleteClientModal) {
      dispatch(toggleDeleteClientModal());
    } else {
      dispatch(toggleDeleteProductModal());
    }
    dispatch(clearItemToEdit()); // limpa o item q estava sendo editado
  };

  const handleDelete = () => {
    if (showDeleteClientModal) {
      dispatch(deleteClient(itemToEdit.id)); // executa a ação de deletar
    } else {
      dispatch(deleteProduct(itemToEdit.id));
    }
    handleClose(); // fecha o modal após a exclusão
  };

  return (
    <ModalContainer open={open} onClose={handleClose}>
      <h2>Are you sure you want to delete this {type}?</h2>
      <Button onClick={handleDelete} variant="contained" color="error" sx={{ mt: 2 }}>
        Yes, Delete
      </Button>
      <Button onClick={handleClose} variant="outlined" sx={{ mt: 2, ml: 2 }}>
        Cancel
      </Button>
    </ModalContainer>
  );
}

export default ConfirmDelete;
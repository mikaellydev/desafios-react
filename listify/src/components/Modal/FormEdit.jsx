import React from 'react';
import { TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleEditClientModal, toggleEditProductModal, setItemToEdit } from '../../Redux/Slices/modalSlice';
import { editClient } from '../../Redux/Slices/clientSlice';
import { editProduct } from '../../Redux/Slices/productSlice';
import ModalContainer from './ModalContainer';

function FormEdit() {
  const dispatch = useDispatch();
  // acessar os estados do formulário e do item a ser editado
  const { itemToEdit, showEditClientModal, showEditProductModal } = useSelector((state) => state.modal); 

  // qual o item que está sendo editado
  const isClient = showEditClientModal;
  const isProduct = showEditProductModal;

  const handleChange = (field, value) => {
    // fild: nome do campo que está sendo alterado | value: valor digitado
    dispatch(setItemToEdit({ ...itemToEdit, [field]: value })); // --> atualiza o item no redux
  };

  // formatar o telefone 
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, ''); 
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/); 
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`; 
    }
    return value; 
  };

  const handleTelephoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    handleChange('telephone', formattedPhone);
  };

    // formatar o preço
  const formatPrice = (value) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length > 2) {
      return `R$ ${cleaned.slice(0, -2)},${cleaned.slice(-2)}`;
    }
    return `R$ ${cleaned}`;
  };
  
  const handlePriceChange = (e) => {
    const formattedPrice = formatPrice(e.target.value);
    handleChange('price', formattedPrice);
  };
  

  // função para validar e salvar os dados
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemToEdit) return;
  
    if (isClient) {
      if (!/\S+@\S+\.\S+/.test(itemToEdit.email)) { // email precisa ser válido
        alert('Please enter a valid email address.');
        return;
      }
  
      if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(itemToEdit.telephone)) { // telefone tem que ter o formado correto
        alert('Please enter a valid phone number (in the format (XX) XXXXX-XXXX).');
        return;
      }
      dispatch(editClient(itemToEdit));
      dispatch(toggleEditClientModal());
    }
  
    if (isProduct) {
      if (isNaN(itemToEdit.stock) || itemToEdit.stock < 0) { // não pode ser menor o que 0
        alert('Please enter a valid stock value.');
        return;
      }
  
      const rawPrice = itemToEdit.price.replace(/\D/g, ''); // deve ser um numero positivo
      if (isNaN(rawPrice) || parseFloat(rawPrice) <= 0) {
        alert('Please enter a valid price.');
        return;
      }
      dispatch(editProduct(itemToEdit));
      dispatch(toggleEditProductModal());
    }
  };

  return (
    <ModalContainer open={showEditClientModal || showEditProductModal} onClose={() => dispatch(isClient ? toggleEditClientModal() : toggleEditProductModal())}>
      <h2>Edit {isClient ? 'Client' : 'Product'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={itemToEdit?.name || ''}
          onChange={(e) => handleChange('name', e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {isClient && (
          <>
            <TextField
              label="Email"
              type="email"
              value={itemToEdit?.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Telephone"
              type="tel"
              value={itemToEdit?.telephone || ''}
              onChange={handleTelephoneChange}
              placeholder='(XX) XXXXX-XXXX'
              fullWidth
              margin="normal"
              required
              slotProps={{
                input: {
                  pattern: '\\(\\d{2}\\) \\d{5}-\\d{4}',
                  inputMode: 'numeric'
                }
              }}
            />
          </>
        )}
        {isProduct && (
          <>
            <TextField
              label="Stock"
              type="number"
              value={itemToEdit?.stock || ''}
              onChange={(e) => handleChange('stock', e.target.value)}
              fullWidth
              margin="normal"
              required
              slotProps={{
                input: {
                  min: 0
                }
              }}
            />
            <TextField
              label="Price"
              type="text" 
              value={itemToEdit?.price || ''}
              onChange={handlePriceChange}
              fullWidth
              margin="normal"
              required
            />
          </>
        )}
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Save
        </Button>
        <Button onClick={() => dispatch(isClient ? toggleEditClientModal() : toggleEditProductModal())} variant="outlined" sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      </form>
    </ModalContainer>
  );
}

export default FormEdit;
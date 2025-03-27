import React from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addClient } from '../../Redux/Slices/clientSlice';
import { addProduct } from '../../Redux/Slices/productSlice';
import ModalContainer from './ModalContainer';
import { toggleAddClientModal, toggleAddProductModal } from '../../Redux/Slices/modalSlice';

function FormAdd() {
  const dispatch = useDispatch();
  const { showAddClientModal, showAddProductModal } = useSelector((state) => state.modal); 

  // determina qual formulário sera aberto
  const isClient = showAddClientModal;
  const isProduct = showAddProductModal;

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');  // remove tudo que não é digitos
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);  // Padrão específico para telefones brasileiros (11 dígitos)
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`; // mascara visual de telefone
    }
    return value; // retorna valor original se não bater com o padrão
  };

  // aplica a formatação ao telefone conforme o usuário digita.
  const handleTelephoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    e.target.value = formattedPhone; 
  };

  const formatPrice = (value) => {
    const cleaned = value.replace(/\D/g, ''); // remove tudo que não é digito
    if (cleaned.length > 2) {
      return `R$ ${cleaned.slice(0, -2)},${cleaned.slice(-2)}`; // separa os reais de centavos
    }
    return `R$ ${cleaned}`; // valores menores q 1 
  };

  // formata o preço conforme o usuário digita.
  const handlePriceChange = (e) => {
    const formattedPrice = formatPrice(e.target.value);
    e.target.value = formattedPrice; 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // previne o carregamento da página quando for enviado

    // pega os valores digitados do cliente
    if (isClient) {
      const clientData = {
        name: e.target.name.value,
        email: e.target.email?.value,
        telephone: e.target.telephone?.value,
      };

      // verifica se o formato do email é válido
      if (!/\S+@\S+\.\S+/.test(clientData.email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // veridica se o formato do telefone é valido
      if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(clientData.telephone)) {
        alert('Please enter a valid phone number (in the format (XX) XXXXX-XXXX).');
        return;
      }

      dispatch(addClient(clientData));  // envia a ação para adicionar cliente no redux
      dispatch(toggleAddClientModal()); // fecha modal
    }

    // pega os valores digitados do produto
    if (isProduct) {
      const productData = {
        name: e.target.name.value,
        stock: e.target.stock?.value,
        price: e.target.price?.value.replace('R$ ', ''), 
      };


      // valida se o número é válido e maior q 0
      if (isNaN(productData.stock) || productData.stock < 0) {
        alert('Please enter a valid stock value.');
        return;
      }

      // verifica se o preço é válido
      if (isNaN(productData.price.replace(',', '.')) || productData.price <= 0) {
        alert('Please enter a valid price.');
        return;
      }

      dispatch(addProduct(productData));  // envia a ação para adicionar produto ao redux
      dispatch(toggleAddProductModal());  //fecha modal
    }
  };

  return (
    <ModalContainer open={showAddClientModal || showAddProductModal} onClose={() => dispatch(isClient ? toggleAddClientModal() : toggleAddProductModal())}>
      <h2>Add New {isClient ? 'Client' : 'Product'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          required
        />
        {isClient && (
          <>
            <TextField
              label="Email"
              type="email"
              name="email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Telephone"
              type="tel"
              name="telephone"
              placeholder='(XX) XXXXX-XXXX'
              fullWidth
              margin="normal"
              required
              onChange={handleTelephoneChange} 
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
              name="stock"
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
              name="price"
              fullWidth
              margin="normal"
              required
              onChange={handlePriceChange}  
            />
          </>
        )}
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
        <Button onClick={() => dispatch(isClient ? toggleAddClientModal() : toggleAddProductModal())} variant="outlined" sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      </form>
    </ModalContainer>
  );
}

export default FormAdd;
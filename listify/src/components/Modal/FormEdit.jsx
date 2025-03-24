import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import ModalContainer from './ModalContainer';

function FormEdit({ type, itemToEdit, onEdit, onClose, open }) {
  const [name, setName] = useState(itemToEdit ? itemToEdit.name : '');
  const [email, setEmail] = useState(itemToEdit ? itemToEdit.email || '' : '');
  const [telephone, setTelephone] = useState(itemToEdit ? itemToEdit.telephone || '' : '');
  const [stock, setStock] = useState(itemToEdit ? itemToEdit.stock || '' : '');
  const [price, setPrice] = useState(itemToEdit ? itemToEdit.price || '' : '');

  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      if (type === 'client') {
        setEmail(itemToEdit.email || '');
        setTelephone(itemToEdit.telephone || '');
      } else if (type === 'product') {
        setStock(itemToEdit.stock || '');
        setPrice(itemToEdit.price || '');
      }
    }
  }, [itemToEdit, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemToEdit) return;

 
    if (type === 'client' && !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

   
    if (type === 'client' && !/^\d{10,}$/.test(telephone)) {
      alert('Please enter a valid phone number (only numbers, at least 10 digits).');
      return;
    }


    if (type === 'product' && (isNaN(stock) || stock < 0)) {
      alert('Please enter a valid stock value (positive number).');
      return;
    }

   
    if (type === 'product' && (isNaN(price) || price < 0)) {
      alert('Please enter a valid price value (positive number).');
      return;
    }

    const updatedItem = {
      ...itemToEdit,
      name,
      ...(type === 'client' && { email, telephone }),
      ...(type === 'product' && { stock, price }),
    };
    onEdit(updatedItem);
    onClose();
  };


  const handleTelephoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setTelephone(value);
  };

  return (
    <ModalContainer open={open} onClose={onClose}>
      <h2>Edit {type === 'client' ? 'Client' : 'Product'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {type === 'client' && (
          <>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Telephone"
              type="tel"
              value={telephone}
              onChange={handleTelephoneChange} 
              fullWidth
              margin="normal"
              required
              inputProps={{ pattern: '\\d{10,}', inputMode: 'numeric' }} 
            />
          </>
        )}
        {type === 'product' && (
          <>
            <TextField
              label="Stock"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              fullWidth
              margin="normal"
              required
              inputProps={{ min: 0 }} 
            />
            <TextField
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              fullWidth
              margin="normal"
              required
              inputProps={{ min: 0 }} 
            />
          </>
        )}
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Save
        </Button>
        <Button onClick={onClose} variant="outlined" sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      </form>
    </ModalContainer>
  );
}


export default FormEdit;
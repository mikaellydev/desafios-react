import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import ModalContainer from './ModalContainer';

function FormAdd({ type, onAdd, onClose, open }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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

    const newItem = {
      id: new Date().getTime().toString(),
      name,
      ...(type === 'client' && { email, telephone }),
      ...(type === 'product' && { stock, price }),
    };

    onAdd(newItem);

    onClose();
    
    setName('');
    setEmail('');
    setTelephone('');
    setStock('');
    setPrice('');

    
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setTelephone(value);
  };

  return (
    <ModalContainer open={open} onClose={onClose}>
      <h2>Add New {type === 'client' ? 'Client' : 'Product'}</h2>
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
              InputProps={{ min: 0 }} 
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
          Submit
        </Button>
        <Button onClick={onClose} variant="outlined" sx={{ mt: 2, ml: 2 }}>
          Cancel
        </Button>
      </form>
    </ModalContainer>
  );
}

export default FormAdd;

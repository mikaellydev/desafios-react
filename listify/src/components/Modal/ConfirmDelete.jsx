import React from 'react';
import { Button } from '@mui/material';
import ModalContainer from './ModalContainer';

function ConfirmDelete({ type, onDelete, onClose, open }) {
  return (
    <ModalContainer open={open} onClose={onClose}>
      <h2>Are you sure you want to delete this {type}?</h2>
      <Button onClick={onDelete} variant="contained" color="error" sx={{ mt: 2 }}>
        Yes, Delete
      </Button>
      <Button onClick={onClose} variant="outlined" sx={{ mt: 2, ml: 2 }}>
        Cancel
      </Button>
    </ModalContainer>
  );
}

export default ConfirmDelete;
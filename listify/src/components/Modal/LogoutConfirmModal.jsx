import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogoutModal } from '../../Redux/Slices/modalSlice';
import { logout } from '../../Redux/Slices/authSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
};

function LogoutConfirmModal() {
  const dispatch = useDispatch(); // enviar as ações para o redux
  const showLogoutModal = useSelector(state => state.modal.showLogoutModal); // acessa o estado de visibilidade do modal logout

  const handleClose = () => {
    dispatch(toggleLogoutModal()); // altera a visibilidade do modal
  };

  const handleConfirm = () => {
    dispatch(logout()); // dispara a ação logout
    handleClose(); // fecha o modal
  };

  return (
    <Modal open={showLogoutModal} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          Are you sure you want to logout?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
          <Button 
            variant="contained" 
            color="error" 
            onClick={handleConfirm}
          >
          </Button>
          <Button 
            variant="outlined" 
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default LogoutConfirmModal;
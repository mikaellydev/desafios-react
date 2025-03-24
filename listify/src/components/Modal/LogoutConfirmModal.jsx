import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';

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

function LogoutConfirmModal({ open, onClose, onConfirm }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" gutterBottom>
          Are you sure you want to logout?
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Yes, Logout
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default LogoutConfirmModal;
import React from 'react';
import { Modal, Box } from '@mui/material';
import { FaTimes } from 'react-icons/fa'; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center', 
};

function ModalContainer({ open, onClose, children }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
      
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            cursor: 'pointer',
            color: 'black', 
          }}
          onClick={onClose}
        >
          <FaTimes size={24} />
        </Box>

     
        {children}

       
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2, 
            mt: 3, 
          }}
        >
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalContainer;
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import Clients from '../../components/Clients/Clients';
import Products from '../../components/Products/Products';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; 
import LogoutConfirmModal from '../../components/Modal/LogoutConfirmModal'; 
import "../Home/Home.css";

function Home() {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false); 

  const user = JSON.parse(localStorage.getItem('user')); 
  const userEmail = user ? user.email : ''; 

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleLogoutConfirm = () => {
    localStorage.removeItem('user'); 
    setLogoutModalOpen(false);
    navigate('/');
  };

  return (
    <div className="home-container">
      <nav className="user-nav">
        <div className="user-info">
          <FaUser size={24} className="user-icon" />
          <div className="user-details">
            <h2>Welcome back!</h2>
            <p>{userEmail}</p>
          </div>
        </div>
        <button 
          className="exit-button" 
          onClick={() => setLogoutModalOpen(true)} 
        >
          Logout
        </button>
      </nav>

      
      <LogoutConfirmModal
        open={logoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={handleLogoutConfirm}
      />

      <Box sx={{ borderBottom: 1, borderColor: 'white' }} className="tabs-container">
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Clients" />
          <Tab label="Products" />
        </Tabs>
      </Box>

      <div className="content-container">
        {tabValue === 0 && <Clients />}
        {tabValue === 1 && <Products />}
      </div>
    </div>
  );
}

export default Home;
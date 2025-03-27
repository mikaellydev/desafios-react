import React from 'react';
import { Tabs, Tab, Box } from '@mui/material'; 
import { useDispatch, useSelector } from 'react-redux'; // hooks do redux
import { FaUser } from 'react-icons/fa'; 
import Clients from '../../components/Clients/Clients';
import Products from '../../components/Products/Products';
import LogoutConfirmModal from '../../components/Modal/LogoutConfirmModal'; 
import { toggleLogoutModal } from '../../Redux/Slices/modalSlice';
import "../Home/Home.css";

function Home() {
  const dispatch = useDispatch(); // hook para disparar ações do redux

  const [tabValue, setTabValue] = React.useState(0); // controla qual aba estará ativa (0 para clientes / 1 para produtos)
  
  // acessa os dados do usuário do redux store
  const { user } = useSelector(state => state.auth);
  const userEmail = user ? user.email : '';

  // atualiza a aba selecionada
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // dispara a action para mostrar o modal de logout
  const handleLogoutClick = () => {
    dispatch(toggleLogoutModal());
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
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </nav>

      <LogoutConfirmModal />

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
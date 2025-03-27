import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // <-- biblioteca de roteamento do react
import { useSelector } from 'react-redux';
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

function AppRoutes() {
  // useSelector acessa o estado global do redux
  const { isAuthenticated } = useSelector(state => state.auth); // <-- acessa o estado de autenticação do slice auth


  // se o usuário não for autenticado mostra a tela de login, tem que estar autenticado para acessar outras páginas
  return (
     <Router> 
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <Login /> : <Navigate to="/home" replace />} 
        />

        <Route 
          path="/home"
          element={isAuthenticated ? <Home /> : <Navigate to="/" replace />}
        />

        <Route
          path="/register"
          element={!isAuthenticated ? <Register /> : <Navigate to="/home" replace />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
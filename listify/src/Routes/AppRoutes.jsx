import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login  from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

function AppRoutes () {
    return(
        <Router>
            <Routes>
                <Route
                path="/"
                element={<Login/>}
                />

                <Route 
                path="/home"
                element={<Home/>}
                />

                <Route
                path="/register"
                element={<Register/>}
                />
                    
                
            </Routes>
        </Router>
    );
};

export default AppRoutes;
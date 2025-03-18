import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login  from "../Pages/Login/Login";
import ProductList from "../Pages/Product-List/ProductList";

function AppRoutes () {
    return(
        <Router>
            <Routes>
                <Route
                path="/"
                element={<Login/>}
                />

                <Route 
                path="/product-list"
                element={<ProductList/>}
                />
                    
                
            </Routes>
        </Router>
    );
};

export default AppRoutes;
import { useNavigate } from "react-router-dom";
import ListClient from "../../components/listClients/ListClient";

import './ProductList.css';

function ProductList() {
    const navigate = useNavigate();
    const back = () => {
        navigate("/");
    };

    return (
        <div>
            <ListClient />

            <button onClick={back}>
                Exit
            </button>
        </div>


    );
};

export default ProductList;
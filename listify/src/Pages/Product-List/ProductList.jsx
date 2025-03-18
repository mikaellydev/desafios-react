import { useNavigate } from "react-router-dom";


function ProductList () {

const navigate = useNavigate ()

const back = () => {
    navigate("/")
}

    return(
        <div>
            <h1>Lista de produtos</h1>

            <button onClick={back}>
                Voltar
            </button>
        </div>

        
    );
};

export default ProductList;
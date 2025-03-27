import React from 'react';
import { FaBox, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { 
  toggleAddProductModal,
  toggleEditProductModal,
  toggleDeleteProductModal,
  setItemToEdit
} from '../../Redux/Slices/modalSlice';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormAdd from '../Modal/FormAdd';
import FormEdit from '../Modal/FormEdit';
import ConfirmDelete from '../Modal/ConfirmDelete';
import '../Products/Products.css';

function Products() {
  const dispatch = useDispatch(); // hook do redux para disparar as actions 

  const products = useSelector(state => state.product.products); // acessa a lsita de produtos 
  const {
    showAddProductModal,
    showEditProductModal,
    itemToEdit,
  } = useSelector(state => state.modal); // acessa a vibilidade dos modais e o item a ser editado

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Product List</h1>
        <button className="add-product-button" onClick={() => dispatch(toggleAddProductModal())}>
          <FaPlus/>
        </button>
      </div>

      <FormAdd
        type="product"
        onClose={() => dispatch(toggleAddProductModal())}
        open={showAddProductModal} 
      />

      <FormEdit
        type="product"
        itemToEdit={itemToEdit}
        onClose={() => dispatch(toggleEditProductModal())}
        open={showEditProductModal} 
      />

      <ConfirmDelete />

      <Table className="products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><FaBox size={20} color="#226ac9" /></td>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td className="action-buttons">
                <button
                  onClick={() => {
                    dispatch(setItemToEdit(product));
                    dispatch(toggleEditProductModal());
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    dispatch(setItemToEdit(product));
                    dispatch(toggleDeleteProductModal());
                  }}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Products;
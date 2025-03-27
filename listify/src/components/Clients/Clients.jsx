import React from 'react';
import { FaUser, FaEdit, FaTrash, FaUserPlus} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleAddClientModal,
  toggleEditClientModal,
  toggleDeleteClientModal,
  setItemToEdit,
} from '../../Redux/Slices/modalSlice';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormAdd from '../Modal/FormAdd';
import FormEdit from '../Modal/FormEdit';
import ConfirmDelete from '../Modal/ConfirmDelete';
import '../Clients/Clients.css';

function Clients() {
  const dispatch = useDispatch(); // hook do redux

  const clients = useSelector(state => state.client.clients); // hook que acessa os estados dos modais e o item a ser editado
  const {
    showAddClientModal,
    showEditClientModal,
    itemToEdit,
  } = useSelector(state => state.modal);

  return (
    <div className="clients-container">
      <div className="clients-header">
        <h1>Client List</h1>
        <button className="add-client-button" onClick={() => dispatch(toggleAddClientModal())}>
          <FaUserPlus/>
        </button>
      </div>

      <FormAdd
        type="client"
        onClose={() => dispatch(toggleAddClientModal())}
        open={showAddClientModal}
      />

      <FormEdit
        type="client"
        itemToEdit={itemToEdit} 
        onClose={() => dispatch(toggleEditClientModal())}
        open={showEditClientModal}
      />

      <ConfirmDelete />

      <Table className="clients-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Telephone</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td><FaUser /></td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.telephone}</td>
              <td className="action-buttons">
                <button
                  onClick={() => {
                    dispatch(setItemToEdit(client));
                    dispatch(toggleEditClientModal());
                  }}
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    dispatch(setItemToEdit(client));
                    dispatch(toggleDeleteClientModal());
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

export default Clients;
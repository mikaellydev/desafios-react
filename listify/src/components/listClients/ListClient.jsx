import React, { useState, useEffect } from "react";

import './ListClient.css';

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientFormAdd from "../ClientForm/ClientFormAdd";
import ClientFormEdit from "../ClientForm/ClientFormEdit";


function ListClient() {

    const [listClient, setListClient] = useState(() => {
        const storedClients = localStorage.getItem('clients');
        return storedClients ? JSON.parse(storedClients) : [
            { name: "Marcio Pereira ALvez", email: "Marcio12Pereira@gmail.com", product: "produto1", id: 1 },
            { name: "Mariana", email: "Marcio12Pereira@gmail.com", product: "produto2", id: 2 }
        ];
    });
    const [showForm, setShowForm] = useState(false);
    const [clientToEdit, setClientToEdit] = useState(null)

    const editClient = (updateClient) => {

        const updateListClient = listClient.map((client => client.id === updateClient.id ? updateClient : client));

        setListClient(updateListClient);
        setClientToEdit(null);

    };

    const handleEditClick = (client) => {
        setClientToEdit(client);
    };

    const handleCancelEdit = () => {
        setClientToEdit(null);
    };


    const addClient = (newClient) => {

        const updateList = [...listClient, newClient];

        setListClient(updateList);

    };

    const deleteClient = (id) => {
        setListClient(prevListClient => prevListClient.filter(client => client.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('clients', JSON.stringify(listClient));
    }, [listClient]);

    return (
        <div>
            <h1>Client List</h1>

            <button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Close Form' : 'Add New Client'}
            </button>

            {showForm && <ClientFormAdd onAddClient={addClient} />}

            {clientToEdit && (
                <ClientFormEdit
                    clientToEdit={clientToEdit}
                    onEditClient={editClient}
                    onCancel={handleCancelEdit}
                />
            )}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {listClient.map((client, index) => (
                        <tr key={client.id}>
                            <td>{index + 1}</td>
                            <td>{client.name}</td>
                            <td>{client.email}</td>
                            <td>{client.product}</td>
                            <td>
                                <button onClick={() => handleEditClick(client)}>Edit</button>
                                <button onClick={() => deleteClient(client.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </div>
    );
};


export default ListClient;
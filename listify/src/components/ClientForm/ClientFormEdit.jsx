import React, { useState, useEffect } from "react";

function ClientFormEdit({ clientToEdit, onEditClient, onCancel }) {

    const [name, setName] = useState(clientToEdit.name);
    const [email, setEmail] = useState(clientToEdit.email)
    const [product, setProduct] = useState(clientToEdit.product)


    useEffect(() => {
        setName(clientToEdit.name);
        setEmail(clientToEdit.email);
        setProduct(clientToEdit.product);
    }, [clientToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateClient = { id: clientToEdit.id, name, email, product };

        onEditClient(updateClient);
    };


    return (
        <div  className="form-container">
            <h1 className='title'>Client form Edit</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name:</label>
                    <input
                        type='text'
                        name='nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Product:</label>
                    <input
                        type='text'
                        name='product'
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        required
                    />
                </div>


                <button className='button-form' type='submit'>Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default ClientFormEdit;
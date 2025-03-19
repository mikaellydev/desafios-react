import React, { useState } from 'react';
import './clientForm.css'

function ClientFormAdd({ onAddClient }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [product, setProduct] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newClient = {
            id: new Date().getTime().toString(), 
            name,
            email,
            product
        };

        onAddClient(newClient); 

        
        setName('');
        setEmail('');
        setProduct('');
    };
    return (
        <div  className="form-container">
            <h1 className='title'>Client form</h1>
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



                <button type='submit'>Submit</button>

            </form>
        </div>
    );

};

export default ClientFormAdd;


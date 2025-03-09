import {FaUser, FaLock} from 'react-icons/fa';

import { useState } from 'react';

import './Login.css';
const Login = () => {

    const [setUserName] =  useState ("");
    const [setPassword] = useState ("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Your data has been successfully submitted!");
    }




    return (
        <div className='container'>

            <form onSubmit={handleSubmit}>
                <h1>Welcome!</h1>

                <div className='input-field'>
                    <label>
                        <input type="email" name='email' placeholder='Email' onChange={(e) => setUserName(e.target.value)} />
                        <FaUser className='icon' />
                    </label>
                </div>

                <div className='input-field'>
                    <label>
                        <input type="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icon' />
                    </label>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Remember
                    </label>

                    <a href="#">Forgot Password?</a>

                </div>

                <button type='submit'>Submit</button>

                <div className="signup-link">
                    <p>Don't have an account? <a href="#">Sign up</a> </p>
                </div>

            </form>
        </div>
    );
}

export default Login;

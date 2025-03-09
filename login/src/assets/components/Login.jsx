import {FaUser, FaLock, FaEye, FaEyeSlash} from 'react-icons/fa';

import { useState } from 'react';
import { useRef } from 'react';

import './Login.css';
const Login = () => {
    const [userName,setUserName] =  useState ("");
    const [password, setPassword] = useState ("");
    const [showPassword, setShowPassword] = useState (false);

    const inputPasswordRef = useRef(null);

    const viewPassword = () => setShowPassword(!showPassword);

    const checkEmptyFields = () => {
        if (!userName.trim() || !password.trim()) {
            alert("Please fill in both fields before submitting!");
            return false;
        }
        else{
            return true;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(checkEmptyFields()){
            alert("Your data has been successfully submitted!");
        }
    };

    return (
        <div className='container'>

            <form onSubmit={handleSubmit}>
                <h1>Welcome!</h1>

                <div className='input-field'>
                    <label>
                        <input type="email" name='email' placeholder='Email' 
                        onChange={(e) => setUserName(e.target.value)} 
                        onKeyDown={(e) => e.key === 'Enter'? (e.preventDefault(), inputPasswordRef.current?.focus()) : undefined}/>
                        <FaUser className='icons' />
                    </label>
                </div>

                <div className='input-field'>
                    <label>
                        <input type={showPassword ? "text": "password"} name='password' placeholder='Password' 
                        ref={inputPasswordRef}
                        onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icons' />
                        <button type='button' className='view-password' onClick={viewPassword}>

                            {showPassword && <FaEye className='icon'/>}
                            view password
                            {!showPassword && <FaEyeSlash className='icon'/>}

                        </button>
                        
                    </label>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Remember
                    </label>

                    <a href="#">Forgot Password?</a>

                </div>

                <button type='submit'className='submit'>Submit</button>

                <div className="signup-link">
                    <p>Don't have an account? <a href="#">Sign up</a> </p>
                </div>

            </form>
        </div>
    );
}

export default Login;

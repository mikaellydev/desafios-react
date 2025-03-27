import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaUser } from "react-icons/fa";
import { registerSuccess } from "../../Redux/Slices/authSlice";
import '../Register/Register.css';

function Register() {
    // estados para os campos do formulário
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch(); // hook do redux para disparar as actions
    const navigate = useNavigate(); // hook para navegação

    const handleSubmit = (event) => {
        event.preventDefault(); // previne recarregar a página

        // obtém usuários existentes ou um array vazio
        const users = JSON.parse(localStorage.getItem('users')) || [];
        // verifica se o email ja está cadastrado
        const emailExists = users.some(user => user.email === email);

        if (emailExists) {
            alert('This email is already registered. Please use another email.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // cria um novo usuário
        const user = { firstName, lastName, email, password };

        // adiciona o novo usuário ao array
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        dispatch(registerSuccess(user)); // dispara a action de registro bem sucedido
    };

    
    const handleLoginClick = () => {
        navigate("/"); // navega para página de login
    };

    return (
        <div className="background-register">

            <div className="container-register">

                <h1>Create new account</h1>

                <form className="form" onSubmit={handleSubmit}>

                    <div className="input-field-register">
                        <FaUser className="icon-register" />
                        <input
                            type="text"
                            name="first-name"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-field-register">
                        <FaUser className="icon-register" />
                        <input
                            type="text"
                            name="last-name"
                            placeholder="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-field-register">
                        <FaEnvelope className="icon-register" />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-field-register" >
                        {showPassword ? (
                            <FaEye className="icon-register" onClick={() => setShowPassword(false)} />
                        ) : (
                            <FaEyeSlash className="icon-register" onClick={() => setShowPassword(true)} />
                        )}
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="button-register">Create account</button>

                    <div className="signup-link">
                        <h6>Don't have an account?
                        <a href="#" onClick={handleLoginClick}>Login</a></h6>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../Login/Login.css';

function Login() {
    const [userEmail, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const isFormValid = () => {
        if (!userEmail.trim() || !password.trim()) {
            alert('Please fill in all required fields correctly before submitting the form');
            return false;
        }
        else {
            return true;
        }
    };

    const nao = (event) => {
        event.preventDefault()
        if (isFormValid()) {
            navigate("/product-list")
        }
    };
    return (
        <div className="login-box">
            <div>
                <h1>Welcome Login</h1>
                <form className="form" onSubmit={nao}>
                    <div className="login">
                        <label>
                            <input
                                type="email"
                                name="Email"
                                placeholder="email"
                                onChange={(e) => setEmail(e.target.value)}

                            />
                        </label>
                    </div>


                    <div className="login">

                        <label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>

                    <button type="submit" className="button">Submit</button>

                </form>
            </div>

        </div>
    );

};

export default Login;
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope } from "react-icons/fa";
import { loginSuccess } from "../../Redux/Slices/authSlice";
import '../Login/Login.css';

function Login() {
    const [userEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!userEmail.trim() || !password.trim()) {
            alert('Please fill in all required fields correctly before submitting the form');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === userEmail && u.password === password);

        if (user) {
            dispatch(loginSuccess(user));
            navigate("/home");
        } else {
            alert('Invalid email or password');
        }
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <div className="background-login">

            <div className="container">

                <h1>Welcome Login</h1>

                <form className="form" onSubmit={handleSubmit}>

                    <div className="input-field">

                        <FaEnvelope className="icon" />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={userEmail}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-field">
                        {showPassword ? (
                            <FaEye className="icon" onClick={() => setShowPassword(false)} />
                        ) : (
                            <FaEyeSlash className="icon" onClick={() => setShowPassword(true)} />
                        )}
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="submit">Submit</button>

                    <div className="signup-link">
                        <h6>Don't have an account?
                        <a href="#" onClick={handleRegisterClick}>Register</a></h6>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login;
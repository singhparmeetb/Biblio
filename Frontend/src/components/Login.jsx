import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = ({ OnLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = async () => {
        try {
            const response = await axios.post('https://library-backend-server.onrender.com/login', {
                email,
                password,
            });

            // Check for successful login
            if (response.status === 200) {
                // Redirect to the main page or perform other actions
                console.log('Login successful');
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your email and password.');

        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={handleLogin}>
                    Login
                    {isLoggedIn ? <Navigate to="/home" /> : <></>}
                </button>
                {error && <div className="error-message">{error}</div>}
                <p>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;

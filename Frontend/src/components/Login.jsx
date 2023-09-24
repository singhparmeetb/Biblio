import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate
    const [error, setError] = useState('');


    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8800/login', {
                email,
                password,
            });

            // Check for successful login
            if (response.status === 200) {
                // Redirect to the main page or perform other actions
                console.log('Login successful');
                navigate('/')
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

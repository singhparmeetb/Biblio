import React from 'react';
import './Login.css';

const Login = () => {
    const handleLogin = () => {

    };
    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="login-button" onClick={handleLogin}>Login</button>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
}

export default Login;

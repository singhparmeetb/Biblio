import React from 'react';
import './SignUp.css';

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
}

export default Signup;

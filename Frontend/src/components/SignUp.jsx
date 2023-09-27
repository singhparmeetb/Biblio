import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSignupSuccessful, setIsSignupSuccessful] = useState(false); // New state variable


    const handleSignup = async () => {
        try {
            const response = await axios.post('https://library-backend-server.onrender.com/signup', {
                fullName,
                email,
                password,
            });

            // Check for successful signup
            if (response.status === 201) {
                // Redirect to the login page or perform other actions
                setIsSignupSuccessful(true);
                console.log('Signup successful');
            }
        } catch (error) {
            console.error('Signup failed:', error);
            setError('Signup failed. Please check your information and try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
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
                <button onClick={handleSignup}>Sign Up</button>
                {isSignupSuccessful && <div className="success-message">Signup successful!</div>}
                {error && <div className="error-message">{error}</div>}
                <p>
                    Already have an account? <a href="/">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;

// src/AuthForm.js
import React, { useState } from 'react';
import { signInUser, signUpUser } from './authfunctions'; // Import the functions

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(true); // Toggle between Sign In / Sign Up
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFeedback('Loading...');
        let result;

        if (isSigningIn) {
            result = await signInUser(email, password);
        } else {
            result = await signUpUser(email, password);
        }

        if (result.success) {
            setFeedback(`Success! User: ${result.user.email}`);
            // You can also redirect the user here
        } else {
            setFeedback(`Error: ${result.error}`);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '400px', margin: '50px auto' }}>
            <h2>{isSigningIn ? 'Sign In' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>
                    {isSigningIn ? 'Sign In' : 'Sign Up'}
                </button>
            </form>

            <p style={{ marginTop: '15px' }}>
                {feedback}
            </p>
            
            <button 
                onClick={() => {
                    setIsSigningIn(!isSigningIn);
                    setFeedback('');
                }} 
                style={{ marginTop: '10px', background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
            >
                {isSigningIn ? 'Need an account? Sign Up' : 'Have an account? Sign In'}
            </button>
        </div>
    );
};

export default AuthForm;
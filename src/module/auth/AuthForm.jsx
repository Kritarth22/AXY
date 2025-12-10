import React, { useState } from 'react';
import { signUpUser } from './authfunctions'; 

const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        // eslint-disable-next-line no-unused-vars
        result = await signUpUser(email, password);
        
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', maxWidth: '400px', margin: '50px auto' }}>
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
            </form>
            <button>
                {'Need an account? Sign Up' & 'Have an account? Sign In'}
            </button>
        </div>
    );
};

export default AuthForm;
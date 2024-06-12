import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import loginImage from './assets/login.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/registration?email=${email}&password=${password}`);
            console.log('response data', response.data);
            if (response.data.length > 0) {
                navigate('/home');
            } else {
                setError('User is not registered. Please register first');
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Invalid email or password. Please try again');
        }
    }

    const handleRegister = () => {
        navigate('/register');
    }

    return (
        <div className='center-container'>
            <div className='login-container'>
                <img src={loginImage} alt="Blood Drop" />
                <h2>Login</h2>
                {error && <p className='error-message'>{error}</p>}
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='input-field' />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='input-field' />
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Register</button>
            </div>
        </div>
    );
}

export default Login;

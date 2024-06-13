import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import registerImage from './assets/login.png';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        setError('');

        // Basic form validation
        if (!name.trim()) {
            setError('Please enter your name.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address ending with @gmail.com.');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/registration', { name, email, password });
            console.log('response data', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Error registering', error);
            setError('Registration failed. Please try again.');
        }
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@gmail\.com$/;
        return re.test(String(email).toLowerCase());
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
        setError('');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setError('');
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    }

    return (
        <div className='register-container'>
            <img src={registerImage} alt="Blood Drop" />
            <h2>Register</h2>
            {error && <p className='error-message'>{error}</p>}
            <input 
                type='text' 
                placeholder='Name' 
                value={name} 
                onChange={handleNameChange} 
                className='register-input' 
            />
            <input 
                type='email' 
                placeholder='Email' 
                value={email} 
                onChange={handleEmailChange} 
                className='register-input' 
            />
            <input 
                type='password' 
                placeholder='Password' 
                value={password} 
                onChange={handlePasswordChange} 
                className='register-input' 
            />
            <button onClick={handleRegister} className='register-button'>Register</button>
        </div>
    );
}

export default Register;

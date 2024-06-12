import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import registerImage from './assets/login.png';
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/registration', { name, email, password });
            console.log('response data', response.data);
        } catch (error) {
            console.error('Error registering', error);
        }
    }

    return (
        <div className='register-container'>
          <img src={registerImage} alt="Blood Drop" />
            <h2>Register</h2>
            <input 
                type='text' 
                placeholder='Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className='register-input' 
            />
            <input 
                type='email' 
                placeholder='Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className='register-input' 
            />
            <input 
                type='password' 
                placeholder='Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className='register-input' 
            />
            <button onClick={handleRegister} className='register-button'>Register</button>
        </div>
    )
}

export default Register;

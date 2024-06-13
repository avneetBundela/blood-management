import React, { useState } from 'react';
import axios from 'axios';
import './BloodDonorForm.css';
import Navbar from './Navbar';

function BloodDonorForm() {
    const [name, setName] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [disease, setDisease] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState(''); // 'success' or 'error'

    const handleAddDonor = async () => {
        if (!name || !bloodGroup || !gender || !address || !city || !state || !mobileNumber) {
            setMessage('Please fill out all required fields');
            setMessageType('error');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/bloodDonors', {
                name,
                bloodGroup,
                gender,
                address,
                city,
                state,
                disease,
                mobileNumber
            });

            console.log(response.data);
            setMessage('Blood Donor added successfully');
            setMessageType('success');
            setName('');
            setBloodGroup('');
            setGender('');
            setAddress('');
            setCity('');
            setState('');
            setDisease('');
            setMobileNumber('');

        } catch (error) {
            console.error('Error adding Blood Donor:', error);
            setMessage('Failed to add blood donor. Please try again.');
            setMessageType('error');
        }
    };

    return (
        <div>
            <Navbar />
            <div className='blood-donor-form'>
                <h2>Add Blood Donor</h2>
                {message && <p className={`message ${messageType}`}>{message}</p>}
                <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                </select>
                <div className="gender-selection">
                    <label>Select gender</label>
                    <input type='radio' name='gender' value='Male' checked={gender === 'Male'} onChange={() => setGender('Male')} /> Male
                    <input type='radio' name='gender' value='Female' checked={gender === 'Female'} onChange={() => setGender('Female')} /> Female
                </div>
                <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' />
                <input type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)} placeholder='City' />
                <input type='text' name='state' value={state} onChange={(e) => setState(e.target.value)} placeholder='State' />
                <select value={disease} onChange={(e) => setDisease(e.target.value)}>
                    <option value="">Select Disease (if any)</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Hypertension">Hypertension</option>
                    <option value="Asthma">Asthma</option>
                    <option value="Heart Disease">Heart Disease</option>
                    <option value="none">None</option>
                </select>
                <input type='text' name='mobileNumber' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Mobile Number' />
                <button onClick={handleAddDonor}>Add Donor</button>
            </div>
        </div>
    );
}

export default BloodDonorForm;

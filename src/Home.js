import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Home.css';
const Home=()=>{
    const[donors,setDonors]=useState([]);
    useEffect(()=>{
        const fetchDonors=async ()=>{
            try{
const response=await axios.get('http://localhost:3000/api/bloodDonors');
setDonors(response.data)
            }
            catch(error){
            console.error('Error fetching Blood Donors:',error)
            }
        };
        fetchDonors();
    },[])
    const handleDelete = async (id)=>{
        try{
            await axios.delete(`http://localhost:3000/api/bloodDonors/${id}`);
setDonors(donors.filter(donor=>donor.id!==id));

        }catch(error){
            console.error('Error deleting Blood Donor:',error);
        }
    } 
    return (
        <div>
            <Navbar/>
            {/* <h2>Blood Donor List</h2>
            <Link to="/addBloodDonor">Add Blood Donor</Link>
            <ul>
                {donors.map(donor=>(
                    <li key={donor.id}>
                        <div>Name: {donor.name}</div>
                        <div>BloodType: {donor.bloodType}</div>
                        <div>Phone: {donor.phone}</div>
                        <Link to={`/editBloodDonor/${donor.id}`}>Edit</Link>
                        <button onClick={()=>handleDelete(donor.id)}>Delete</button>
                    </li>
                ))}
            </ul> */}
             <div className="quote-container">
        <div className="quote">
          <h1>Welcome to Our Website</h1>
          <p>Discover the beauty of simplicity.</p>
        </div>
      </div>
        </div>
    ) 
}
export default Home;
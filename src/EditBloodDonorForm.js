import React, { useState,useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function EditBloodDonorForm(){
  const {id}=useParams();
  const[name,setName]=useState('');
  const[bloodType,setBloodType]=useState('');
  useEffect(()=>{
    const fetchDonors=async ()=>{
        try{
const response=await axios.get(`http://localhost:3000/bloodDonors/${id}`);
const {name,bloodType}=response.data;
setName(name);
setBloodType(bloodType);

        }
        catch(error){
        console.error('Error fetching Blood Donors:',error)
        }
    };
    fetchDonors();
},[id])
const handleUpdateDonor = async ()=>{
  try{
      const response=await axios.put(`http://localhost:3000/api/bloodDonors/${id}`,{name,bloodType});


console.log(response.data);

  }catch(error){
      console.error('Error updating Blood Donor:',error);
  }
} 
    return(
      <div>
        <h2> Edit Blood Donor</h2>
        <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
        <input type='text' name='name' value={bloodType} onChange={(e)=>setBloodType(e.target.value)} placeholder='Blood Type'/>
        <button onClick={handleUpdateDonor}>Update Donor</button>
      </div>
    )
}
export default EditBloodDonorForm;
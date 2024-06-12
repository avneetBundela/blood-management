import React, { useState,useEffect }  from 'react';
import axios from 'axios';
function BloodDonorList(){
  const [donors,setDonors]=useState([]);
  const[editedDonor,setEditedDonor]=useState({
    id:'',
    name:'',
    bloodGroup:'',
    gender:'',
    address:'',
    city:'',
    state:'',
    disease:'',
    mobileNumber:''
  });
  const[isEditModalOpen,setIsEditModalOpen]=useState(false);
  useEffect(()=>{
    const fetchDonors=async ()=>{
        try{
const response=await axios.get('http://localhost:3000/bloodDonors');
setDonors(response.data)
        }
        catch(error){
        console.error('Error fetching Blood Donors:',error)
        }
    };
    fetchDonors();
},[])
const handleEdit=(donor)=>{
  setEditedDonor(donor);
  setIsEditModalOpen(true);
}
const handleSaveEdit = async ()=>{
  try{
      await axios.put(`http://localhost:3000/bloodDonors/${editedDonor.id}`,editedDonor);
      setIsEditModalOpen(false);
      const response=await axios.get('http://localhost:3000/bloodDonors');
setDonors(response.data);
console.log('Donor edited successfully')

  }catch(error){
      console.error('Error editing Blood Donor:',error);
  }
} 
const handleCloseEditModal=()=>{

  setIsEditModalOpen(false);
}
const handleInputChange=(e)=>{
  const{name,value}=e.target;
  setEditedDonor({...editedDonor,[name]:value});
  
}
const handleDelete = async (id)=>{
  try{
      await axios.delete(`http://localhost:3000/bloodDonors/${id}`);
setDonors(donors.filter(donor=>donor.id!==id));
console.log(`Deleted donor with Id:${id}`);
  }catch(error){
      console.error('Error deleting Blood Donor:',error);
  }
} 
    return(
      <div>
        <h2>Blood Donor List</h2>
        <table className='donor-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood group</th>
              <th>Gender</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Disease</th>
              <th>Mobile Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donors.map(donor=>(
              <tr key={donor.id}>
                <td>{donor.name}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.gender}</td>
                <td>{donor.address}</td>
                <td>{donor.city}</td>
                <td>{donor.state}</td>
                <td>{donor.disease}</td>
                <td>{donor.mobileNumber}</td>
<td>
  <button onClick={()=>handleEdit(donor)}>Edit</button>
  <button onClick={()=>handleDelete(donor.id)}>Delete</button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditModalOpen &&(
          <div className='edit-modal-overlay'>
               <div className='edit-modal'>
                <h2>Edit Donor</h2>
                <input type='text' name='name' value={editedDonor.name} onChange={handleInputChange} placeholder='Name'/>
                <input type='text' name='bloodGroup' value={editedDonor.bloodGroup} onChange={handleInputChange} placeholder='Blood Group'/>
                <input type='text' name='gender' value={editedDonor.gender} onChange={handleInputChange} placeholder='Gender'/>
                <input type='text' name='address' value={editedDonor.address} onChange={handleInputChange} placeholder='Address'/>
                <input type='text' name='city' value={editedDonor.city} onChange={handleInputChange} placeholder='City'/>
                <input type='text' name='state' value={editedDonor.state} onChange={handleInputChange} placeholder='State'/>
                <input type='text' name='disease' value={editedDonor.disease} onChange={handleInputChange} placeholder='Disease'/>
                <input type='text' name='mobileNumber' value={editedDonor.mobileNumber} onChange={handleInputChange} placeholder='Mobile Number'/>
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCloseEditModal}>Cancel</button>
               </div>
          </div>
        )}
      </div>
    )
}
export default BloodDonorList;
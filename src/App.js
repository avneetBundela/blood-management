import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Login from'./Login';
import Register from './Register';
import BloodDonorList from './BloodDonorList';
import BloodDonorForm from './BloodDonorForm';
import EditBloodDonorForm from './EditBloodDonorForm';
import AboutUs from './About';
import ContactUs from './ContactUs';

function App(){
    return(
        <Router>
            <div className="App">
                <Routes><></>
                    <Route path="/"element={<Login/>}/>
                    <Route path="/login"element={<Login/>}/>
                    <Route path="/logout"element={<Login/>}/>
                    <Route path="/home"element={<Home/>}/>
                     <Route path="/about"element={<AboutUs/>}/>
                     <Route path="/contact"element={<ContactUs/>}/>
                    <Route path="/register"element={<Register/>}/>
                    <Route path="/bloodDonors"element={<BloodDonorList/>}/>
                    <Route path="/addBloodDonor"element={<BloodDonorForm/>}/>
                    <Route path="/editBloodDonor/:id"element={<EditBloodDonorForm/>}/>
                </Routes>
            </div>
        </Router>
    );
}
export default App;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import logo from '../assets/logo.png'; // Import your logo image

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* <img src={logo} alt="Logo" /> */}
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/addBloodDonor">Add Blood Donor</NavLink>
                </li>
                <li>
                <NavLink to="/bloodDonors">Donors List</NavLink>
                </li>
                <li>
                    <NavLink to="/logout" activeClassName="active">Logout</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

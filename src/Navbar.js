// src/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">For More Info</h1>
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li> 
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;

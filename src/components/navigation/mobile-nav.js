import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

    
  return (
    <nav className="mobile-nav" onClick={() => closeMenu}> 
      <button className= "mobile-nav-btn" onClick={handleToggle}> { navbarOpen ? "" : "" }<FontAwesomeIcon icon="bars" /></button> 
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li><NavLink exact to="/" activeClassName="mobile-nav-link" onClick={handleToggle}>Home</NavLink></li>
          <li><NavLink exact to="/about-me" activeClassName="mobile-nav-link" onClick={handleToggle}>About</NavLink></li>
          <li><NavLink exact to="/contact" activeClassName="mobile-nav-link" onClick={handleToggle}>Contact</NavLink></li>
          <li><NavLink exact to="/blog" activeClassName="mobile-nav-link" onClick={handleToggle}>Blog</NavLink></li>
        </ul>
      </nav>
    );
  }

  export default MobileNav;
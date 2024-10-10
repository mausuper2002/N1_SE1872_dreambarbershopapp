import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <button className="booking-btn">Booking</button>
        <img src={logo} alt="Dream Barber Logo" className="logo" />
        <button className="sign-in-btn">Sign In</button>
      </div>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">Home Service</li>
          <li className="nav-item">Service</li>
          <li className="nav-item">Before Barbering</li>
          <li className="nav-item">Before Coloring</li>
          <li className="nav-item">Team</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

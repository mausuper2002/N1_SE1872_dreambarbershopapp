import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [menus, setMenu] = useState([
    {
      page: "Home Service",
      path: "/homeservice",
    },
    {
      page: "Service",
      path: "/service",
    },
    {
      page: "Before Barbering",
      path: "/bespoke",
    },
    {
      page: "Before Coloring",
      path: "/becolor",
    },
    {
      page: "Team",
      path: "/teampage",
    },
    {
      page: "Contact",
      path: "/contact",
    },
  ]);
  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/booking" className="booking-btn">
          Booking
        </Link>
        <Link to="/">
          <img src={logo} alt="Dream Barber Logo" className="logo" />
        </Link>
        <Link to="/signin" className="sign-in-btn">
          Sign In
        </Link>
      </div>
      <nav className="nav-bar">
        <ul className="nav-list">
          {menus?.map((menu, menuKey) => (
            <li className="nav-item" key={menuKey}>
              <Link to={menu.path}>{menu?.page}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

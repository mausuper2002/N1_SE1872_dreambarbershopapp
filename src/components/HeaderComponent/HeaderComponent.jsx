import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.jpg";
import banner from "../../assets/images/banner.jpg";
import { useState } from "react";
import ServicePage from "../../pages/ServicePage/ServicePage";
import HomeService from "../../pages/HomeService/HomeService";
import { Link } from "react-router-dom";
const Header = () => {
  const [menus, setMenu] = useState([
    {
      page: "Home Service",
      path: HomeService,
    },
    {
      page: "Service",
      path: ServicePage,
    },
    {
      page: "Before Barbering",
      path: "*",
    },
    {
      page: "Before Coloring",
      path: "*",
    },
    {
      page: "Team",
      path: "*",
    },
    {
      page: "Contact",
      path: "*",
    },
  ]);
  return (
    <header className="header">
      <div className="top-bar">
        <button className="booking-btn">Booking</button>
        <img src={logo} alt="Dream Barber Logo" className="logo" />
        <button className="sign-in-btn">Sign In</button>
      </div>
      <nav className="nav-bar">
        <ul className="nav-list">
          {menus?.map((menu, menuKey) => (
            <li className="nav-item" key={menuKey}>
              <Link to={menu?.path}>{menu?.page}</Link>
              {/* Home Service */}
            </li>
          ))}

          {/* <li className="nav-item">Service</li>
          <li className="nav-item">Before Barbering</li>
          <li className="nav-item">Before Coloring</li>
          <li className="nav-item">Team</li>
          <li className="nav-item">Contact</li> */}
        </ul>
      </nav>
      <img src={banner} alt="Dream Barber banner" className="banner" />
    </header>
  );
};

export default Header;

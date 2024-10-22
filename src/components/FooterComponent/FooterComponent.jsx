import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>CAMPUS ADDRESS</h3>
        <p>CAMPUS 1: LE VAN VIET STREET, 9 DISTRICT</p>
        <p>CAMPUS 2: PHAN VAN TRI STREET, GO VAP DISTRICT</p>
      </div>
      <div className="footer-section">
        <h3>CONTACT</h3>
        <p>DREAM BARBERSHOP</p>
        <p>Phone: 18001234</p>
        <p>Email: dreambarbershop@gmail.com</p>
        <p>Website: dreambarbershop.com</p>
        <p>Group: dreambarbershop group</p>
      </div>
      <div className="footer-section">
        <h3>SCHEDULE</h3>
        <p>MONDAY - SATURDAY: 8:00 - 11:30, 13:00 - 19:00</p>
        <p>SUNDAY: 8:00 - 11:30</p>
      </div>
    </footer>
  );
};

export default Footer;

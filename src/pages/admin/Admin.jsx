import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Admin.css";
import { FaBars } from "react-icons/fa";
const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={() => setCollapsed(!collapsed)} />
      </div>
    </div>
  );
};

export default Admin;

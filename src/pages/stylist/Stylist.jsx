import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "./Stylist.css";
import sidebarBg from "../../assets/images/bg2.jpg";
import { BsScissors } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { useState } from "react";
import ProfileStylist from "./content/Profile/Profile";
import Calendar from "./content/Calendar/Calendar";
import { FaBars } from "react-icons/fa";
import ServiceHistory from "./content/ServiceHistory/ServiceHistory";

const Stylist = ({ toggled, handleToggleSidebar }) => {
  const [keySelected, setKeySelected] = useState("");

  const [collapsed, setCollapsed] = useState(false);

  const handleOnClick = (key) => {
    setKeySelected(key);
  };
  const renderPage = (key) => {
    switch (key) {
      case "profile-stylist":
        return <ProfileStylist />;
      case "calendar":
        return <Calendar />;
      case "service-history":
        return <ServiceHistory />;
      default:
        return <></>;
    }
  };

  console.log(keySelected);
  return (
    <>
      <div className="stylist-container">
        <div className="stylist-sidebar">
          <ProSidebar
            image={sidebarBg}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
          >
            <SidebarHeader>
              <div
                style={{
                  padding: "24px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  fontSize: 14,
                  letterSpacing: "1px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                <BsScissors size={"2em"} color={"671A1A"} />
                <span>DREAM BARBER SHOP</span>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <Menu iconShape="circle">
                <MenuItem
                  onClick={() => handleOnClick("profile-stylist")}
                  icon={<CgProfile />}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => handleOnClick("calendar")}
                  icon={<FaRegCalendarAlt />}
                >
                  Calendar
                </MenuItem>
                <MenuItem
                  onClick={() => handleOnClick("service-history")}
                  icon={<FaHistory />}
                >
                  Service History
                </MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
        <div className="stylist-content">
          <div className="stylist-header">
            <FaBars size={"2em"} onClick={() => setCollapsed(!collapsed)} />
          </div>
          <div className="stylist-main">{renderPage(keySelected)}</div>
        </div>
      </div>
    </>
  );
};

export default Stylist;

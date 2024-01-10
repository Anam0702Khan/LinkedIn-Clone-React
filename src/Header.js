import React from "react";
import "./Header.css";
import Headeroptions from "./Headeroptions";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./slices/UserSlice";

function Header() {
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  const withouSidebarRoutes = ["/premium"];
  const { pathname } = useLocation();
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) return null;

  // console.log(user)  
  return (
    <div className="header">
      <div className="header__left">
      <Link to='/' style={{cursor:"pointer"}}>
         <div className="header__logo">
          <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" />
        </div>
      </Link>
        
        {/* <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div> */}
      </div>
 
      <div className="header__right">
        <div onClick={() => navigate("/")}>
          <Headeroptions Icon={HomeIcon} title="Home" />
        </div>
        

        <div onClick={() => navigate("/jobs")}>
          <Headeroptions Icon={BusinessCenterIcon} title="Jobs" />
        </div>

        <div onClick={() => navigate("/message")}>
          <Headeroptions Icon={MessageIcon} title=" Messaging" />
        </div>

        <div onClick={() => navigate("/notification")}>
          <Headeroptions Icon={NotificationsIcon} title="Notifications" />
        </div>
       
        <Headeroptions avatar={Avatar}   />
      </div>
    </div>
  );
}

export default Header;

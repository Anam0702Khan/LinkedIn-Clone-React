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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./slices/UserSlice";

function Header() {
  const navigate = useNavigate();
  const user = useSelector(selectUser)
  console.log(user)  // ek object milega jisme displayname,uid,email,photoutl hoga
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" />
        </div>
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
       
        <Headeroptions avatar={Avatar}   title= {user ? user.displayName : "xyz"}  />
      </div>
    </div>
  );
}

export default Header;

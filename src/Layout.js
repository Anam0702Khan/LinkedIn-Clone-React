import React, { useEffect } from "react";
import Header from "./Header";
import "./index.css";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widget from "./widget/Widget";


function Layout() {
 
  return (
    <>
    <div className="app-wrapper">
        {/* <Header /> */}
          <div className="app__body">
          {/* <h1>this is layout</h1> */}
            <Sidebar />
            <Feed />
            <Widget />
          </div>
    </div>
    </>
  )
  }

export default Layout;

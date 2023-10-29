// import "../styles/App.css";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Feed from "./feed/Feed";
import Widget from "./widget/Widget"
import Login from "./authentication/login/Login";
import Register from "./authentication/register/Register";
import {  Routes,Route } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return <div className="app-wrapper">
    
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path ="/feed" element= {<Feed />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/jobs" element={<img  className='image' src="https://linked-in-in.netlify.app/static/media/job.5ebfb4c6adce78ffe4c9.png" />} />
        <Route path="/message" element={<img className="image" src="https://linked-in-in.netlify.app/static/media/message.bf7729535fcb3ef67e99.png" />}/>
        <Route path="/notification" element={<img className="image" src="https://linked-in-in.netlify.app/static/media/notification.5fb3cb52ba6f1872a678.png" />}/>
      </Routes>
  </div>;
  
}

export default App;


import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Feed from '../feed/Feed'
import Register from '../authentication/register/Register'
import Login from '../authentication/login/Login'
import Header from '../Header'
import Layout from '../Layout'
import "../index.css"


function Allroutes() {
  return (
    <div>
       {/* <BrowserRouter> */}
       <Header/>
       <Routes>
        <Route index element={<Layout />} />
        <Route path ="/feed" element= {<Feed />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/jobs" element={<img className='image' src='https://linked-in-in.netlify.app/static/media/job.5ebfb4c6adce78ffe4c9.png' />}/>
        <Route path="/message" element={<img className="image" src="https://linked-in-in.netlify.app/static/media/message.bf7729535fcb3ef67e99.png" />}/>
        <Route path="/notification" element={<img className="image" src="https://linked-in-in.netlify.app/static/media/notification.5fb3cb52ba6f1872a678.png" />}/>
      </Routes>
       {/* </BrowserRouter> */}
      
    </div>
  )
}

export default Allroutes
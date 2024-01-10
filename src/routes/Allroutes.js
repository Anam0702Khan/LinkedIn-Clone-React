import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Feed from '../feed/Feed'
import Register from '../authentication/register/Register'
import Login from '../authentication/login/Login'
import Header from '../Header'
import Layout from '../Layout'
import DetailPage from "../DetailPage"
import Premium from "../premium/Premium"
import  UserProfile  from '../UserProfile'
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
        <Route path='/premium' element={<Premium />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/detailPage/:userId' element={<DetailPage/>} />
        <Route path="/jobs" element={<h1 style={{fontSize: "32px", marginTop: "30px"}}>Working on it</h1> }/>
        <Route path="/message" element={<h1 style={{fontSize: "32px", marginTop: "30px"}}>Working on it</h1>}/>
        <Route path="/notification" element={<h1 style={{fontSize: "32px", marginTop: "30px"}}>Working on it</h1>}/>
      </Routes>
       {/* </BrowserRouter> */}
      
    </div>
  )
}

export default Allroutes
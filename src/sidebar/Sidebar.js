import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../slices/UserSlice'
import { Link } from 'react-router-dom'

function Sidebar() {
  const user = useSelector(selectUser)
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
          <img src='https://i.pinimg.com/750x/7c/49/d4/7c49d4e0ce3b7117707026f5a93797f6.jpg' />

          <div className='profile__details'>
          <Link to="/user">
          <Avatar />
          </Link>
            <h5>Anam Khan</h5>
            <p>Web Developer</p>
          </div>

          <div className='profile__stats'>
            <span>Who viewed your profile</span>
            <span className='stat__number'>20</span>
          </div>

          <div className='profile__stats'>
            <span>Connetion <br/><b>Grow your Network</b></span>
            <span className='stat__number'>150</span>
          </div>

          <Link to="/premium" style={{ textDecoration: "none" }}>
          <div className='profile__stats'>
            <span style={{ color: "blue" }}>Try Premium for Free</span>
          </div>
        </Link>

        </div>
        <div className='sidebar__recent'>
           <p>Recent</p>
           <p className='hash'><span>#</span> branding</p>
           <p className='hash'><span>#</span> marketing</p>
           <p className='hash'><span>#</span> web development</p>
           <p className='hash'><span>#</span> programming</p>
           <p className='hash'><span>#</span> reactjs</p>
           <p className='hash'><span>#</span> redux toolkit</p>
        </div>
    </div>
  )
}

export default Sidebar
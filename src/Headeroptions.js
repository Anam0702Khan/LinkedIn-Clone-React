import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { toast } from 'react-toastify';
import { useSelector ,useDispatch} from 'react-redux';
import { selectUser } from './slices/UserSlice';
import { auth } from './Firebase';
import { signOut } from 'firebase/auth';
import { logoutUser } from './slices/UserSlice';
import { useNavigate,Link } from 'react-router-dom';

function HeaderOptions({ avatar,Icon,title }) {
  const [sliderVisible, setSliderVisible] = useState(false);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
   const navigate = useNavigate()

  const handleAvatarClick = () => {
    setSliderVisible(!sliderVisible);
  };
  
  const handleLogout = () => {
    toast.success("Logout")
    dispatch(logoutUser());
    signOut(auth);
    navigate("/register")
  };
  
  return (
    <div className='header__options'>
     {
       Icon &&  <Icon></Icon>
     }

      {avatar && (
        <div>
          <Avatar name={avatar} onClick={handleAvatarClick} src={ user ? user.photoURL : ''}></Avatar>
        </div>
      )}

      {sliderVisible && (
        <div className="slider"> 
        <Link to="/user" style={{textDecoration: "none"}}>
          <button className='logout-btn'>Profile</button>
          </Link>
          <Link to="/premium" style={{ textDecoration: "none" }}>
            <button className='logout-btn' >Premium</button>
          </Link>
          <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>
      )}
     <span>{title}</span>

    </div>
  );
}

export default HeaderOptions;



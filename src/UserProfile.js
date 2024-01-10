import React from 'react'
import { Avatar } from '@mui/material'
import { Link } from "react-router-dom"
import "./index.css"
import ModalComponent from './modal/ModalComponent'
import { PostStatus ,getPosts} from "./FirestoreApi";
import { useState } from 'react'

function UserProfile() {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("")
    const [allStatus, setAllStatus] = useState([])
    //   const user = useSelector(selectUser)

    const handleOpen = () => {
        setOpen(true);
    }

    const sendStatus = async() => {
        await PostStatus(status)
        await setOpen(false)
        await setStatus('')
      }

    return (

        <div>
            <div className='profileSection'>
                <div className='sidebar__profiles'>
                    <img src='https://i.pinimg.com/750x/7c/49/d4/7c49d4e0ce3b7117707026f5a93797f6.jpg' />

                    <div className='profile__details'>
                        <Avatar />
                        <p>Web Developer</p>
                    </div>

                    <div className='profile__stats'>
                        <span>Who viewed your profile</span>
                        <span className='stat__number'>20</span>
                    </div>

                    <div className='profile__stats'>
                        <span>Connetion <br /><b>Grow your Network</b></span>
                        <span className='stat__number'>150</span>
                    </div>

                    <Link to="/premium" style={{ textDecoration: "none" }}>
                        <div className='profile__stats'>
                            <span style={{ color: "blue" }}>Try Premium for Free</span>
                        </div>
                    </Link>


                </div>
                <div className='feedSection'>
                    <div className="feed__input">
                        <Avatar />
                        <button className="btn" onClick={handleOpen}>Start a post</button>
                    </div>
                </div>
                <ModalComponent
                    open={open}
                    setOpen={setOpen}
                    status={status}
                    setStatus={setStatus}
                    sendStatus={sendStatus} />

            </div>

        </div>
    )
}

export default UserProfile

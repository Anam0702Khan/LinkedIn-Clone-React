import React, { useMemo, useState } from "react";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TodayIcon from "@mui/icons-material/Today";
import "./Feed.css";
import Post from '../post/Post'
import ModalComponent from "../modal/ModalComponent";
import { PostStatus, getPosts } from "../FirestoreApi";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/UserSlice";

function Feed() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("")
  const [allStatus, setAllStatus] = useState([])
  const user = useSelector(selectUser)

  const sendStatus = async () => {
    await PostStatus(status)
    await setOpen(false)
    await setStatus('')
  }
  useMemo(() => {
    getPosts(setAllStatus)
  }, [])

  const handleOpen = () => {
    setOpen(true);
    console.log("fiunccalled", open)
  }

  return (
    <div className="feed">
      <div className="feed__form">
        <div className="feed__input">
          <Avatar src={user ? user.photoURL : ''} />
          <button className="btn" onClick={handleOpen}>Start a post</button>
        </div>

        {/* <div className="feed__options">
          <div className="option">
            <PhotoIcon style={{ color: '#70b5f3' }} />
            <span>Photo</span>
          </div>

          <div className="option">
            <YouTubeIcon style={{ color: '#7fc15e' }} />
            <span>Video</span>
          </div>

          <div className="option">
            <TodayIcon style={{ color: '#e7a33e' }} />
            <span>Event</span>
          </div>

          <div className="option">
            <AssignmentIcon style={{ color: '#fc9295' }} />
            <span>Write Article</span>
          </div>
        </div> */}
      </div>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        status={status}
        setStatus={setStatus}
        sendStatus={sendStatus} />

      {allStatus.map((post, index) => {
        return (
          <>
            <div className="post-update" key={index}>
              <div className="post-update-img">
                <Avatar src={user ? user.photoURL : ''} />
              </div>
              <p>{post.status}</p>
            </div>
          </>
        )
      })}
      <Post />
    </div>
  );
}

export default Feed;

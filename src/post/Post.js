import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";


function Post() {
  const [apidata, setApiData] = useState([]);
  const [like, setLike] = useState(true);
  const [comment, setComment] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const apiUrl = "https://academics.newtonschool.co/api/v1/linkedin/post";

  const getData = () => {
    fetch(apiUrl, {
      method: "GET",
      headers: {
        projectId: "nae1y51qfcg9",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data.data);
      })
      .catch((err) => console.error("Error", err));
  };

  const handleLike = () => {
    setLike(!like);
    setLikeCount(like ? likeCount + 1 : likeCount - 1);
  };

  const handleComment = () => {
    // alert("comment")
    setComment(!comment);
    setCommentCount(comment ? commentCount - 1 : commentCount + 1);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {apidata &&
        apidata.map((post) => (
          <div className="posts">
            <div className="post__header">
              <div className="post__headerLeft">
                <Avatar src={post.author.profileImage} />
                <div className="post__profile_details">
                  <h3>{post.author.name}</h3>
                  <p>{post.title}</p>
                </div>
              </div>

              <div className="post__headerRight">
                <MoreVertIcon />
              </div>
            </div>

            <div className="post__body">
              <p>{post.content}</p>
              <img className="post-img" src={post.channel.image} />

              <div className="post__numbers">
                <span className="like__number">{likeCount} likes</span>
                <span className="comment__number">{commentCount} comments</span>
              </div>
            </div>

            <div className="post__footer">
              <div className="post__footer__option">
                <div onClick={handleLike}>
                  {like ? (
                    <div>
                      <ThumbUpIcon />
                      <span>Like</span>
                    </div>
                  ) : (
                    <div>
                      <ThumbUpIcon style={{ color: "#004c75" }} />
                      <span>Like</span>
                    </div>
                  )
                  }
                </div>
              </div>

              <div className="post__footer__option">
                <div onClick={handleComment}>
                  {comment ? (
                    <div>
                      <CommentIcon style={{ color: '#004c75'}} />
                      <span>Comment</span>
                    </div>
                  ) : (
                    <div>
                      <CommentIcon />
                      <span>Comment</span>
                    </div>
                  )
                  }
                </div>
               
              </div>
            </div>
          </div> //last div
        ))}
    </>
  );
}

export default Post;



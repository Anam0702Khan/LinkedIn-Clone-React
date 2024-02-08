import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword , GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { auth } from "../../Firebase";
import { loginUser } from "../../slices/UserSlice";
import { useDispatch } from "react-redux";
import "./Login.css"


function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = () => {
    if(!email){
      return alert("Email is required.")
    }
    if(!password){
      return alert("Password is required.")
    }
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => 
    {
      console.log(user)
      dispatch(
        loginUser({
          email: user.email,
          uid: user.uid,
          displayName:  user.displayName,
          photoURL: user.photoURL,
        })
      );

    })
    .catch(error => console.log(error))
    toast.error("First Create your Account")
    // navigate("/")
    
  };

  
  return (
    <div className="login">
  
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
      />
      <div className="login__container">

      <h1 className="heading">Sign in</h1>
      <p className="sub-heading">Stay updated on your professional world</p>
      <div className="allinputs">
        <input
          className="common-input"
          type="email"
          placeholder="Email or Phone"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <input
          className="common-input"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </div>
      <button className="sign-btn" onClick={handleLogin} >Sign in</button>
      
      </div>
     
    </div>
  );
}

export default Login;

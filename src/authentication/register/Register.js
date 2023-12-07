import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase";
import { loginUser } from "../../slices/UserSlice";
import { useDispatch } from "react-redux";
import "./Register.css"

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photoURL, setphotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const handleSignup = () => {
    if (!email) {
      return alert("Email is required");
    }
    if (!password) {
      return alert("Password is required.");
    }
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userAuth) => {
      // Sign in the user and then update the profile
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Update the user profile
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              dispatch(
                loginUser({
                  email: auth.currentUser.email,
                  uid: auth.currentUser.uid,
                  displayName: name,
                  photoURL: photoURL,
                })
              );
              toast.success("Account created successfully");
              navigate("/");
            })
            .catch((err) => {
              alert(err);
              console.log(err);
            });
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
    
    toast.success("Account created successfully");
    setEmail("");
    // setName("");
    // setphotoURL("");
    setPassword("");
    navigate("/");
  };

 

  return (
    <div className="login">
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
      />
      <h1 className="heading">Make the most of your professional life</h1>
      <div className="auth-inputs">
        {/* <input
          className="common-input"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="on"
        /> */}
        {/* <input
          className="common-input"
          type="text"
          placeholder="photoURL"
          value={photoURL}
          onChange={(e) => setphotoURL(e.target.value)}
          autoComplete="on"
        /> */}
        <input
          className="common-input"
          type="email"
          placeholder="Email or Phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="on"
        />
        <input
          className="common-input"
          type="password"
          placeholder="Password(6 or more characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="sign-btn" onClick={handleSignup}>
        Agree & Join
      </button>
      {/* <p className="or-texts">Name and Photo are not mandatory!!!</p> */}
      
    </div>
  );
}

export default Register;

import React from 'react'
import Login from './login/Login'
import { useState } from 'react';
import Register from './register/Register'
import "./login/Login.css"

function Authentication() {
    const [active, setActive] = useState("login")
    const handleChange =() =>{
        setActive(active === "login" ? "signup" : "login")
    }
    return (
        <div>
        <div style={{backgroundColor:"white"}}>
            {active === "login" ? (<Login />) : (<Register />)}
            {/* <div className="auth__more"> */}
            <div className='login'>
            <span>
            { active  ==="login" ?
             (<> <span className="go-to-signup">Don't have an account?</span> <span className="join-now" onClick={handleChange}>Sign Up</span></>)
            :
             (<> <span className="go-to-signup">Already have an account?</span> <span className="join-now" onClick={handleChange}>Sign In</span></>)}
                </span>
            </div>
            </div>
        </div>
    )
}

export default Authentication
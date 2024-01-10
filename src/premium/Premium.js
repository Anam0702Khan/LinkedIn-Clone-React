import React from 'react'
import "./Premium.css";
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';

function Premium() {
    return (
        <>
            <div style={{backgroundColor: "white"}}>

            <div className='header'>
                <div className="header__logo">
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" />
                </div>
                <div className='leftside'>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <p className='left__text'>Back to LinkedIn ?</p>
                    </Link>
                </div>
            </div>
            <hr></hr>
            <p className='first__heading'>Join the millions of LinkedIn members using Premium to get ahead.</p>
            <p className='second__heading'>Thousands of members in India use Premium</p>
            <p className='third__heading'>Start your free 1-month trial today. Cancel anytime. We'll send you a reminder 7 days before your trial ends.</p>
            <Cards />
            </div>
        </>
    )
}

export default Premium
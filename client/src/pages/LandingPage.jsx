import React from 'react';
import img1 from "../images/landing.webp"
import "../style/landing.css"
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing">
            <div className="left">
                <div className="bp3-navbar-heading" style={{fontSize:"100px",marginLeft:"30px"}}>Instabook</div>
                <br/>
                    <br/>
                    <br/>

                <div className="buttons">
                    
                <button className="glow-on-hover"  ><Link className="anc" to="/signup" >Sign Up</Link></button>
                <button className="glow-on-hover"  ><Link className="anc" to="/login" >Login</Link></button>
                </div>

            </div>
            <img className="img1" src={img1} alt="" />

        </div>
    );
};

export default LandingPage;
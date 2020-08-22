import React from 'react';
import img1 from "../images/landing.webp"
import "../style/landing.css"
import { useHistory } from 'react-router-dom';


const LandingPage = () => {
    const history = useHistory()
    return (
        <div className="landing" style={{overflowY:"hidden"}}>
            <div className="left">
                <div className="left-img" style={{fontSize:"100px",marginLeft:"30px"}}>Instabook</div>
                <br/>
                    <br/>
                    <br/>

                <div className="buttons">
                    
                <button className="glow-on-hover" onClick={(e)=>history.push("/signup")} >Sign Up</button>
                <button className="glow-on-hover" onClick={(e)=>history.push("/login")}  >Login</button>
                </div>

            </div>
            <img className="img1" src={img1} alt="" />

        </div>
    );
};

export default LandingPage;
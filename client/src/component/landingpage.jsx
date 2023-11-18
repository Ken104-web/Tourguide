import React from "react";
import './landingpage.css';
import LoginForm from './sign';

function LandingPage(){
    return(
        <>
       <div className="title">
            <div className="landingpage">
                <h1> Travel Discover more</h1>
                <p>Adventure with us to explore</p>
                </div>
       </div>
       < LoginForm />
        </>
    )
}

export default LandingPage;

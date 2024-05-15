import React from "react";
import profile_pic from "../images/profile-pic.jpeg";

export default function Header() {
    return(
        <header className="header">
            <img className="header-profile-pic" src={profile_pic}></img>
            <h1 className="header-name">Darius Taylor</h1>
            <h3 className="header-title">Software Developer/Programmer</h3>
            <h5 className="header-location">Houston, Texas</h5>
            <div className="header-buttons">
                <button id='header-email' className="fa-solid fa-envelope"><a href="/">   Email</a></button>
                <button id='header-linked' className="fa-brands fa-linkedin"><a href="https://www.linkedin.com/in/darius-taylor-1bb81120b/">   LinkedIn</a></button>
            </div>
            
        </header>
    )
}
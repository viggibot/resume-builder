import React from "react";
import img from "../photo.jpg";
import "../index.css";

const Header = () => {
    return(
    <React.Fragment>    
        <div className="header">
            <div className="left-side">
                <div className="small-box"></div>
                <div className="about-content">
                    <h1>Elon Musk</h1>
                    <h3>Enterpreneur, Engineer, inventor, and investor</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="profile-image-container">
                    <div className="profile-image">
                        <img src={img} alt="profile-image"/>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="right-content">
                    <ul>
                        <li>eleon@teslamotors.com</li>
                        <li>620-681-5000</li>
                        <li>Los Angles, USA</li>
                        <li>@elonmusk</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="header-endLine"></div>
    </React.Fragment>    
    )
}

export default Header;
import React from "react";
import img from "../photo.jpg";
import "../index.css";

const HeaderDesign = ({Header}) => {

    console.log(Header);

    return(
    <React.Fragment>
        <div>    
        {Header.map((element) => {
            console.log(element.id);
            return <div className="header" key={element.id}>
                <div className="left-side">
                    <div className="small-box"></div>
                    <div className="about-content">
                        <h1>{element.firstName +" "+ element.lastName}</h1>
                        <p>{element.Description}</p>
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
                            <li>{element.email}</li>
                            <li>{element.phone}</li>
                            <li>{element.city}</li>
                            <li>@{element.url}</li>
                        </ul>
                    </div>
                </div>
            </div>
        })}
        </div>
        
        <div className="header-endLine"></div>
    </React.Fragment>    
    )
}

export default HeaderDesign;
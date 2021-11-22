import React from "react";
import HeaderDesign from "./resume-design/headerDesign";
import Workskills from "./resume-design/work&skills";

const FullDesign = () => {

    const Header = JSON.parse(localStorage.getItem("header"));
    const workExperienceList = JSON.parse(localStorage.getItem("workExperienceList"));
    const Education = JSON.parse(localStorage.getItem("education"));
    const Skill = JSON.parse(localStorage.getItem("skilltag"));

    
    let deleteResume = () => {
        const localDateHeader = ["header","workExperienceList","education","skilltag"];
        localDateHeader.forEach(key =>
            localStorage.removeItem(key)
        )
        window.location.reload();
    }
    
    return(
        <React.Fragment>
            <HeaderDesign Header={Header}/>
            <Workskills workExperienceList={workExperienceList} Education={Education} Skill={Skill}/>
            <button type="button" onClick={deleteResume}>Delete Resume</button>
        </React.Fragment>
    )
}

export default FullDesign;
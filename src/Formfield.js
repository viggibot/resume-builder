import React,{useState} from "react";
import Header from "./header/header";
import WorkExperience from "./header/workExperience";
import Skills from "./header/skills";
import Achivements from "./header/achivements";

const UserDetails = () => {

    const ArrayofWork = [{
        id:1,
        role:"",
        companyName:"",
        cityWork:"",
        startDate:"",
        endDate:"",
        moreDetails:""
    }];

    const ArrayofEducation = [{
        id:1,
        Title:"",
        companyName:"",
        cityWork:"",
        startDate:"",
        endDate:"",
        moreDetails:""
    }];

    const ArrayofHeader = [{
        id:1,
        firstName:"",
        lastName:"",
        Description:"",
        phone:"",
        email:"",
        city:"",
        url:"",
    }];
    

    const [headerDetails,setHeaderDetails] = useState(ArrayofHeader)
    const [education,setEducation] = useState(ArrayofEducation)
    const [workExperienceList,setWorkExperience] = useState(ArrayofWork)
    const [skilltag, setTag] = useState([]);

    const getDetails = () => {
        localStorage.setItem("header",JSON.stringify(headerDetails));
        localStorage.setItem("workExperienceList",JSON.stringify(workExperienceList));
        localStorage.setItem("education",JSON.stringify(education));
        localStorage.setItem("skilltag",JSON.stringify(skilltag));
        window.location.reload();
    }

    return(
        <div className="FormFields">
            <h1 style={{textAlign:"center"}}>Resume Builder</h1>
            <Header headerDetails={headerDetails} setHeaderDetails={setHeaderDetails}/>
            <WorkExperience workExperienceList={workExperienceList} setWorkExperience={setWorkExperience}/>
            <Achivements education={education} setEducation={setEducation}/>
            <Skills skilltag={skilltag} setTag={setTag}/>
            <button type="button" onClick={getDetails}>submit</button>
        </div>
    );
}

export default UserDetails;

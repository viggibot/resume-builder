import Header from "./header/header";
import WorkExperience from "./header/workExperience";
import Skills from "./header/skills";
import Achivements from "./header/achivements";

const UserDetails = () => {
    return(
        <div className="FormFields">
            <h1 style={{textAlign:"center"}}>Resume Builder</h1>
            <form>
                <Header/>
                <WorkExperience/>
                <Achivements/>
            </form>
            <Skills/>
        </div>
    );
}

export default UserDetails;

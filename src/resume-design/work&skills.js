import "../index.css";

const Workskills = ({workExperienceList,Education,Skill}) => {

    return(
        <div className="work-skill-container">
            
            <div className="left-container">
                {workExperienceList.map((element) => 
                <div className="workExperience" key={element.id}>
                    <h2>{element.role}</h2>
                    <h3>{element.companyName}</h3>
                    <div className="current-place">
                        <span><i>{element.startDate} - {element.endDate}</i></span>
                        <span><i>{element.cityWork}</i></span>
                    </div>
                    <div className="more-details">
                        <span><i>Accomplishments</i></span>
                        <div>
                            <p>{element.moreDetails}</p>
                        </div>
                    </div>
                </div>
                )}
            </div>

            <div className="right-container">
                <div className="Skills">
                    <h2>SKILLS & COMPETENCIES</h2>
                    {Skill.map((element) => 
                    <ul className="skill-tag" key={element.id}>
                         <li>{element.tag}</li>
                    </ul>
                    )}
                </div>

                <div className="achievements">
                    {Education.map((element) => 
                    <div className="Education" key={element.id}>
                        <h2>{element.Title}</h2>
                        <h3>{element.companyName}</h3>
                        <div className="current-place">
                            <span><i>{element.startDate} - {element.endDate}</i></span>
                            <span><i>{element.cityWork}</i></span>
                        </div>
                        <div className="more-details">
                            <span><i>Accomplishments</i></span>
                            <div>
                                <p>{element.moreDetails}</p>
                            </div>
                        </div>
                    </div>
                )}
                </div>

            </div>
        </div>
    );
}

export default Workskills;
import "../index.css";

const Workskills = () => {
    return(
        <div className="work-skill-container">
            
            <div className="left-container">
                
                <div className="workExperience">
                    <h2>WORK EXPERIENCE</h2>
                    <h3>Founder, CEO & Lead Designer</h3>
                    <h3>SpaceX - Space Exploration Technologies</h3>
                    <div className="current-place">
                        <span><i>06/2002 - Present</i></span>
                        <span><i>Howthorne, USA</i></span>
                    </div>
                    <div className="more-details">
                        <span><i>Accomplishments</i></span>
                        <ul>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="right-container">
                <div className="Skills">
                    <h2>SKILLS & COMPETENCIES</h2>
                    <ul className="skill-tag">
                        <li>thinking thourgh first project</li>
                        <li>marketing</li>
                        <li>Micromanagement</li>
                        <li>Goal oriented</li>
                        <li>resiliency</li>
                        <li>Future focused</li>
                        <li>Leadership</li>
                        <li>Creativity</li>
                        <li>Time Management</li>
                        <li>Presistence</li>
                        <li>Turning Ideas into companies</li>
                        <li>Long-term thinking</li>
                    </ul>
                </div>

                <div className="achievements">
                    <h2>ACHIEVEMENTS & CERTIFICATES</h2>
                    <span>53rd Richest person in the world - Forbes(2018)</span>
                    <span>21st on the Forbes list of The World's Most Powerfull People</span>
                </div>

            </div>
        </div>
    );
}

export default Workskills;
import {useState} from "react";

const Skills = () =>{

    const skills = [];

    const [tag, setTag] = useState(null);

    const addTag = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>SKILLS</h2></legend>
                <div className="skill-tag">
                    <div className="inner-skill-container">
                        <input type="text" placeholder="Ex: HTML" name="tags" required />
                        <button type="submit">Add</button>
                    </div>
                </div>
            <div className="SkillsContainer">

            </div>
            </fieldset>
        </div>
    );
}

export default Skills;
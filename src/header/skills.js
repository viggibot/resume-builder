import {useState} from "react";

const Skills = () =>{

    const [pos, setpos] = useState(0)

    const [skilltag, setTag] = useState(null);

    const [tagName, setName] = useState("Skills");

    const addTag = (e) => {
        e.preventDefault();
    }

    console.log(skilltag);

    

    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>SKILLS</h2></legend>
                <div className="skill-tag">
                    <div className="inner-skill-container">
                        <form onSubmit={(e) => addTag(e)}>
                            <input type="text" placeholder="Ex: HTML" name="tag" onChange={(e) => setName(e.target.value)} value={tagName} required />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            <div className="SkillsContainer">
                <ul>
                    {skilltag ? skilltag.map(element => <li key={pos}>{element.tag}{element.id}</li>) : null}
                </ul>
            </div>
            </fieldset>
        </div>
    );
}

export default Skills;

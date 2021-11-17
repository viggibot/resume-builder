import {useState} from "react";

const Skills = () =>{

    const [pos, setpos] = useState(null)

    const [skilltag, setTag] = useState([]);

    const [tagName, setName] = useState("");
    
    const addTag = (e) => {
        e.preventDefault();
        setpos(pos + 1);
        setTag((prev) => {
            return [...prev,{id:pos + 1,tag:e.target[0].value}]
        })
        setName("");
    }

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
                <ul className="tag-container">
                    {skilltag ? skilltag.map(element => <li key={element.id} className="tags">{element.tag}</li>) : null}
                </ul>
            </div>
            </fieldset>
        </div>
    );
}

export default Skills;

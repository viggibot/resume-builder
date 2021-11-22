import { useState } from "react";

const WorkExperience = ({workExperienceList,setWorkExperience}) =>{

    const [idValue,setIdValue] = useState(1);

    const handelChange = (e,index) => {
        const {name, value} = e.target;
        const list = [...workExperienceList];
        list[index][name] = value;
        setWorkExperience(list);
    }

    const appendForm = (e) => {
        setIdValue(idValue + 1);
        setWorkExperience((prev)=>{ return [...prev,{
            id: idValue + 1,
            role:"",
            companyName:"",
            cityWork:"",
            startDate:"",
            endDate:"",
            moreDetails:""
        }]}); 
    }

    const deleteForm = (e,id) => {
        e.preventDefault();
        setWorkExperience((prev) => {
            return prev.filter(element => element.id !== id);
        })   
    }

    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>WORK EXPERIENCES</h2></legend>
            <div className="appendChild">
                {workExperienceList.map((element,index) => { return <div key={element.id}>
                <p>form field{}</p>
                {element.id <= 1 ? null : <button className="deletebtn" onClick={e => deleteForm(e,index)}>delete</button> }   
                <div className="common-container">
                    <input type="text" placeholder="Role" name="role" onChange={(e) => handelChange(e,index)} />
                    <input type="text" placeholder="Company Name" name="companyName" onChange={(e) => handelChange(e,index)}/>
                    <input type="text" placeholder="City, Country" name="cityWork" onChange={(e) => handelChange(e,index)}/>
                    <div>
                        <div>
                            <input type="month" name="startDate" onChange={(e) => handelChange(e,index)}/>
                        </div>
                        <div>
                            <input type="month" name="endDate" onChange={(e) => handelChange(e,index)}/>
                        </div>
                    </div>
                    <div className="textEditor">
                        <textarea placeholder="Type something here..." name="moreDetails" onChange={(e) => handelChange(e,index)}/>
                    </div>
                </div>
                
                </div>})}
            </div>
            <button className="btn" onClick={e => appendForm(e)}>Add More Fields +</button>
            </fieldset>
        </div>
    );
}

export default WorkExperience;
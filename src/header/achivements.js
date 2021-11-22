import {useState } from "react";

const Achivements = ({education,setEducation}) =>{

    const [idValue,setIdValue] = useState(1);

    const handelChange = (e,index) => {
        const {name, value} = e.target;
        const list = [...education];
        list[index][name] = value;
        setEducation(list);
    }

    const appendForm = (e) => {
        setIdValue(idValue + 1);
        setEducation((prev)=>{ return [...prev,{
            id: idValue + 1,
            Title:"",
            companyName:"",
            cityWork:"",
            startDate:"",
            endDate:"",
            moreDetails:""
        }]}); 
    }

    const deleteForm = (e,id) => {
        e.preventDefault();
        setEducation((prev) => {
            return prev.filter(element => element.id !== id);
        })   
    }


    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>EDUCATION DETAILS</h2></legend>
            <div className="appendChild">
            {education.map((element,index) => { return <div key={element.id}>
            <p>form field{element.id}</p>
            {element.id <= 1 ? null : <button className="deletebtn" onClick={e => deleteForm(e,element.id)}>delete</button> }   
            <div className="common-container">
                <input type="text" placeholder="Title" name="Title" onChange={(e) => handelChange(e,index)}/>
                <input type="text" placeholder="Company Name" name="companyName" onChange={(e) => handelChange(e,index)}/>
                <input type="text" placeholder="City, Country" name="citywork" onChange={(e) => handelChange(e,index)}/>
                <div>
                    <div>
                        <input type="month" name="startDate" onChange={(e) => handelChange(e,index)}/>
                    </div>
                    <div>
                        <input type="month" name="endDate" onChange={(e) => handelChange(e,index)}/>
                    </div>
                    </div>
                <div className="textEditor">
                    <textarea placeholder="Type something here.." name="moreDetails" onChange={(e) => handelChange(e,index)}></textarea>
                </div>
            </div>
            </div>})}
            </div>
            <button className="btn" onClick={e => appendForm(e)}>Add More Fields +</button>
            </fieldset>
        </div>
    );
}

export default Achivements;
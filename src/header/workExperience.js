import {useState } from "react";
import useCustomHooks from "./customhooks";

const WorkExperience = () =>{

    const [formPos, setPos] = useState(1);

    let formField = 
        <div className="common-container">
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Company Name" required />
        <input type="text" placeholder="Phone Number"/>
        <input type="text" placeholder="City, Country"/>
        <div>
            <input type="month"required/> <input type="year"required/>
        </div>
        <div className="textEditor">
            <textarea></textarea>
        </div>
        </div>;

    let objectformField = [{id:1,form:formField}]
    const [arrayFormField, setArrayFormField] = useState(objectformField);

    const {appendForm,deleteForm} = useCustomHooks(setArrayFormField,formField,formPos,setPos);

    return(
        <div className="WorkExperience common">
            <fieldset><legend><h2>WORK EXPERIENCES</h2></legend>
            <div className="appendChild">
            {arrayFormField.map(element => { return <div key={element.id}>
            <p>form field{element.id}</p>
            {element.id <= 1 ? null : <button className="deletebtn" onClick={e => deleteForm(e,element.id)}>delete</button> }   
            {element.form}</div> })}
            </div>
            <button className="btn" onClick={e => appendForm(e)}>Add More Fields +</button>
            </fieldset>
        </div>
    );
}

export default WorkExperience;
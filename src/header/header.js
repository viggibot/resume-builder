import React from "react";
import "./formDesign.css";

const Header = ({headerDetails,setHeaderDetails}) =>{

    const handelChange = (e) => {
        const {name, value} = e.target;
        const list = [...headerDetails];
        list[0][name] = value;
        setHeaderDetails(list);
    }

    return(
        <div className="headerDesign common">
            <fieldset><legend><h2>HEADER</h2></legend>
                <div className="header-container common-container">
                    <input type="text" placeholder="First Name" name="firstName" onChange={e => handelChange(e)}/>
                    <input type="text" placeholder="Last Name"  name="lastName" onChange={e => handelChange(e)}/>
                    <div className="textEditor">
                        <textarea name="Description" onChange={e => handelChange(e)}></textarea>
                    </div>
                    <input type="number" placeholder="Phone Number" name="phone" onChange={e => handelChange(e)}/>
                    <input type="text" placeholder="E-mailID" name="email" onChange={e => handelChange(e)}/>
                    <input type="text" placeholder="City, Country" name="city" onChange={e => handelChange(e)}/>
                    <input type="text" placeholder="Twitter url" name="url" onChange={e => handelChange(e)}/>
                </div>
            </fieldset>
        </div>
    );
}

export default Header;
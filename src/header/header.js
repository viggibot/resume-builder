import "./formDesign.css";

const Header = () =>{
    return(
        <div className="header common">
            <fieldset><legend><h2>HEADER</h2></legend>
                <div className="header-container common-container">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <div className="textEditor">
                        <textarea></textarea>
                    </div>
                    <input type="number" placeholder="Phone Number"/>
                    <input type="text" placeholder="E-mailID"/>
                    <input type="text" placeholder="City, Country"/>
                    <input type="text" placeholder="Twitter url"/>
                </div>
            </fieldset>
        </div>
    );
}

export default Header;
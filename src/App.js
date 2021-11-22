import React from "react";
import UserDetails from "./Formfield";
import FullDesign from "./fullDesign";

function App() {

  const localDate = localStorage.getItem("header");


  return (
    <React.Fragment>
      {localDate ? <FullDesign/> : <UserDetails/> }
    </React.Fragment>
  );
}

export default App;

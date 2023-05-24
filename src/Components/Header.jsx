import React from "react";
import AccountCircle from "./AccountCircle";
import logo from '../logo/typeLogo.png';



const Header = () => {
 
  
  return (
    <div className="header">
      <div className="logo">
        <img src={logo}
        alt="logo" 
        style={{width:"3rem"}}
        />
      </div>
      <div className="user-icon" >
        <AccountCircle/>
      </div>
      {/* <img src="src\logo\logo1.png" alt="logo" /> */}
    </div>
  );
};

export default Header;

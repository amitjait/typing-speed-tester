import React, {useState } from "react";
import AccountCircle from "./AccountCircle";
import { AppBar, Modal, Tab, Tabs } from "@mui/material";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUPForm";
import { useTheme } from "styled-components";

const Header = () => {
  let [open, setOpen] = useState(false);
  let [value, setValue] = useState(0);
  let theme = useTheme();

  function handleOpen() {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChnage = (e, v)=>{
    setValue(v);
  }

  return (
    <div className="header">
      <div className="logo" onClick={handleClose}>
        Logo
      </div>
      <div className="user-icon" onClick={handleOpen}>
        {/* {user icon} */}
        <AccountCircle />
      </div>
      {console.log("theme", theme)}
      <Modal open={open} onClose={handleClose}
        style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"

        }}
      >
        
        <div style={{width:"400px"}}>
            <AppBar position="parent" style={{background:"transparent"}}>
                <Tabs 
                    value={value}
                    onChange={handleValueChnage}
                    variant="fullWidth"
                    >
                    <Tab label='login' style={{color:theme.textColor}}></Tab> 
                    <Tab label="signup" style={{color:theme.textColor}}></Tab>
                </Tabs>
            </AppBar>
            {value === 0 && <LoginForm/>}
            {value === 1 && <SignUpForm/>}
        </div>
      </Modal>
    </div>
  );
};

export default Header;

import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { useTheme } from "styled-components";
import {signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { toast } from "react-toastify";
import errorMapping from "../Utils/erroMapping";
import { auth } from "../firebaseConfigu";
import LogoutIcon from '@mui/icons-material/Logout';
import GoogleButton from 'react-google-button';
import { AppBar, Box, Modal, Tab, Tabs } from "@mui/material";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUPForm";
import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const AccountCircle = ()=>{

        let [open, setOpen] = useState(false);
        let [value, setValue] = useState(0);
        let theme = useTheme();

        let [user] = useAuthState(auth);

        let navigate = useNavigate();

        function handleOpen() {
            if(user){
                navigate('/user');
            }else{
                setOpen(true);
            }
            
        }

        const handleClose = () => {
            setOpen(false);
        };

        const handleValueChnage = (e, v)=>{
            setValue(v);
        }

        const logOut = ()=>{
            auth.signOut();
        }

        const googleProvide = new GoogleAuthProvider();
        const handelGoogleSignIn = () =>{
            signInWithPopup(auth, googleProvide).then((res)=>{
            toast.success('Google Login Success', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                handleClose();
            }).catch((e)=>{
            
            toast.error(errorMapping[e.code] || 'Not able to use google authenticator!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            })
        }

        return (
        <div >
            <AccountCircleIcon onClick={handleOpen} style={{cursor: "pointer"}}/>
            {user && <LogoutIcon onClick={logOut} />}
            <Modal open={open} onClose={handleClose}
                style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center"

                }}
            >
                
                <div style={{width:"400px", textAlign:"center"}}>
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
                    {value === 0 && <LoginForm handleClose={handleClose}/>}
                    {value === 1 && <SignUpForm handleClose={handleClose}/>}

                    <Box>
                    <span>OR</span>
                    <GoogleButton 
                        style={{width:"100%", marginTop:'10px'}}
                        onClick={handelGoogleSignIn}
                    />
                    </Box>
                </div>
            </Modal>
            </div>
        );
};


export default AccountCircle;
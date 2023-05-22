import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import { auth } from "../firebaseConfigu";
import { toast } from "react-toastify";

const SignUpForm = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setCPass] = useState("");
    let theme = useTheme();

    const handleSubmit = ()=>{
        if(!email || !password || !cpass){

            toast.warning('Fill All Details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        if(password !== cpass){
            toast.warning('Password Mismatch!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        }

        auth.createUserWithEmailAndPassword(email, password).then((res)=>{
            toast.success('user created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }).catch((e)=>{
            toast.error('Not Able to create user', {
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
        <Box p={3}
            style={{
                display:'flex',
                flexDirection:"column",
                gap:"20px"
            }}
        >
            <TextField
                variant="outlined"
                type="email"
                label="Enter Your Email"
                onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
             variant="outlined"
             type="password"
             label="Enter Your Password"
             onChange={(e)=>setPassword(e.target.value)}
             InputLabelProps={{
                style:{
                    color:theme.textColor
                }
                }
            }
            InputProps={{
                style:{
                    color:theme.textColor
                }
            }}
             />
             <TextField
             variant="outlined"
             type="password"
             label="Enter Your Password"
             onChange={(e)=>setCPass(e.target.value)}
             InputLabelProps={{
                style:{
                    color:theme.textColor
                }
                }
            }
            InputProps={{
                style:{
                    color:theme.textColor
                }
            }}
             />
            <Button
                variant="contained"
                size="large"
                style={{backgroundColor:theme.background, color:theme.textColor}}
                onClick={handleSubmit}
            >SignUp</Button>
        </Box>
    )
}

export default SignUpForm;
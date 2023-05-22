import { BorderAllOutlined } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "styled-components";
import { auth } from "../firebaseConfigu";
import { toast } from "react-toastify";

const LoginForm = () =>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let theme = useTheme();

    const handleSubmit =() =>{
        if(!email || !password){
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

        auth.signInWithEmailAndPassword(email, password).then((res)=>{
            toast.success('Loged In', {
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
            toast.error('Invalid credentials', {
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
            <Button
                variant="contained"
                size="large"
                style={{backgroundColor:theme.background, color:theme.textColor}}
                onClick={handleSubmit}
            >Login</Button>
        </Box>
    )
}

export default LoginForm;
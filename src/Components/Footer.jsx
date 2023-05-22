import React, { useState } from "react";
import Select from 'react-select';
import { themeOptions } from "../Utils/themeOptions";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
    const {setTheme, theme} = useTheme();
    let [value, setValue] = useState("");

    // let navigate = useNavigate();


    const handleChange = (e)=>{
        // console.log(e);
        setValue(e.value);
        setTheme(e.value);
        localStorage.setItem("theme", JSON.stringify(e.value));
    }
    return (
        <div className="footer">
            <div className="links">
                <div className="linkedin link" > 
                    {// eslint-disable-next-line jsx-a11y/anchor-has-content
                    <a href="https://www.linkedin.com/in/amit-kumar-775311aa/" target="blank"><i class="fa fa-linkedin" aria-hidden="true" style={{color:"white"}}></i></a>}
                </div>
                <div className="resume link" >
                    {// eslint-disable-next-line jsx-a11y/anchor-has-content
                    <a href="https://drive.google.com/file/d/1vbSwI68BEKH95_5EaE5O_sUIZFWG8VRU/view?usp=share_link" target="blank"><i class="fa fa-file" aria-hidden="true"></i></a>}
                </div>
                
            </div>
            <div className="themeButton">
                {console.log("value",value.lable)}
               <Select 
                value={value.lable}
                onChange = {handleChange}
                options={themeOptions}
                menuPlacement="top"
                defaultInputValue={theme.value}
                styles={{
                    control:styles => ({...styles, background:theme.background}),
                    menu: styles => ({...styles, background:theme.background}),
                    option:(styles, {isFocused}) => {
                        return {
                            ...styles,
                            backgroundColor:(!isFocused) ? theme.background :theme.textColor,
                            color:(!isFocused) ? theme.textColor : theme.background,
                            cursor:'pointer' 
                        }
                    }
                }
                }
               />
            </div>
        </div>
    )
}

export default Footer;
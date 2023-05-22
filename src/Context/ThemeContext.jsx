import { createContext, useContext, useState } from "react";
import { themeOptions } from "../Utils/themeOptions";


const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{

    let defaultTheme = JSON.parse(localStorage.getItem("theme")) || themeOptions[0].value;
    let [theme, setTheme] = useState(defaultTheme);

    const values = {
        theme,
        setTheme
    }

    return (<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>)
}

export const useTheme = ()=> useContext(ThemeContext);
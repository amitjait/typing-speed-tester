import React from "react";
import { GlobalStyles } from "./Styles/global";
import Header from "./Components/Header";
import TypingBox from "./Components/TypingBox";
import Footer from "./Components/Footer";
import { ThemeProvider} from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () =>{

    const {theme} = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer/>
            <div className="canvas">
                <GlobalStyles />
                <Header />
                <TypingBox />
                <Footer />  
            </div>
        </ThemeProvider>
    )
}

export default App;
import React, { useState } from "react";
import { useTestMode } from "../Context/TestModeContext";


const UpperMenu = ({counter, reset})=>{

    const {setTestTime} = useTestMode();
    const [lastTime, setLastTime] = useState(0); 

    const updateTime = (e)=>{
        setTestTime(Number(e.target.id));
        if(lastTime === e.target.id){
            reset();
        }
        setLastTime(e.target.id);
    }

    return (
        <div className="upper-menu">
            <div className="counter">
                {counter}
            </div>
            <div className="modes">
                <div className="test-mode" id={15} onClick={updateTime}>15s</div>
                <div className="test-mode" id={30} onClick={updateTime}>30s</div>
                <div className="test-mode" id={60} onClick={updateTime}>60s</div>
            </div>
        </div>
    )
}

export default UpperMenu;
import React, { useEffect } from "react";
import Graph from "./Graph";
import { toast } from "react-toastify";
import { auth, db } from "../firebaseConfigu";

const Stats = ({wpm, accuracy, correctChars, incorrectChars, missedChars, extraChars, graphData})=>{

    const timeSet = new Set();
    const newGraph = graphData.filter(i=>{
        if(!timeSet.has(i[0])){
            timeSet.add(i[0]);
            return i;
        }
    })

    const pushDataToDB = ()=>{
        if(isNaN(accuracy)){
            toast.warning('Invalid Test', {
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



        const resultRef = db.collection("Result");
        const {uid} = auth.currentUser;

        resultRef.add({
            wpm:wpm,
            accuracy:accuracy,
            timeStamp: new Date(),
            character : `${correctChars} / ${incorrectChars} / ${missedChars} / ${extraChars}`,
            userId : uid
        }).then((res)=>{
            toast.success('Data saved to DB', {
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
        }).catch((e)=>{
            toast.warning('Not able to save data', {
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
        })
    }

    useEffect(()=>{
        if(auth.currentUser){
            pushDataToDB();
        }else{
            toast.warning('Login to save results', {
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
    },[])

    return (
        <div className="state-box">
            <div className="left-stats">
                <div className="title" >WPM</div>
                <div className="subtitle">{wpm}</div>
                <div className="title">Accuracy</div>
                <div className="subtitle">{accuracy}</div>
                <div className="title">Characters</div>
                {/* <div className="subtitle">CC / IC / MC / EC </div> */}
                <div className="subtitle">{correctChars} / {incorrectChars} / {missedChars} / {extraChars} </div>
            </div>
            <div className="right-stats">
                <Graph graphData={newGraph}/> 
            </div>
        </div>
    )
}

export default Stats;
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfigu";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import TableUserData from "../Components/TableUserData";
import Graph from "../Components/Graph";
import UserInfo from "../Components/UserInfo";
import { CircularProgress } from "@mui/material";

const UserPage = ()=>{
    const [data, setData] = useState([]);
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const [graphData, setGraphData] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    const fecthUserData = ()=>{
        const resultRef = db.collection("Result");
        const {uid} = auth.currentUser;
        let tempData = [];
        let tempGraphData = [];

        resultRef
        .where("userId", "==", uid)
        .orderBy("timeStamp", "desc")
        .get()
        .then((snapshot)=>{
            // eslint-disable-next-line
            snapshot.docs.map((doc)=>{
                tempData.push({...doc.data()})
                tempGraphData.push([doc.data().timeStamp.toDate().toLocaleString().split(",")[0], doc.data().wpm])
            })
            setData(tempData);
            setGraphData(tempGraphData.reverse());
            setDataLoading(false);
        })
    } 

    useEffect(()=>{
        if(!loading){
            fecthUserData();           
        }
        if(!loading && !user){
            navigate('/');
        }

    }, [loading, navigate, user]);

    if(loading || dataLoading){
        return <div className="center-of-screen">
            <CircularProgress size={100}/>
        </div>
    }

    return (
        <div className="canvas" style={{display:"flex",alignItems:"center", flexDirection:"column", overflowX:"hidden"}}>
            <UserInfo totalTest={data.length}/>
            <div className="graph-user-data" >
                <Graph graphData={graphData} />
            </div>

            <TableUserData data={data}/>
        </div>
    )
}

export default UserPage;
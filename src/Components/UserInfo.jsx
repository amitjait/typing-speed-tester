import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfigu";

const UserInfo = ({totalTest})=>{

    const [user] = useAuthState(auth);
 
    return (
        <div className="user-profile">
            <div className="user">
                <div className="picture">
                    <AccountCircleIcon style={{displa:'block', transform:'scale(6)'}}/>
                </div>
                <div className="info">
                    <div className="email">
                        {user.email}
                    </div>
                    <div className="joined-at">
                        {user.metadata.creationTime}
                    </div>
                </div>
            </div>
            <div className="total-tests">
                <span>Total Test Taken - {totalTest}</span>
            </div>
        </div>
    )
}

export default UserInfo;
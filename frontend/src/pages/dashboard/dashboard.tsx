import React from 'react';
import {getToken} from "../../helpers/localStorage.helper";

const Dashboard = () => {
    const token = getToken()

    if (token.id){
        return (
            <div>
               Welcome {token.userName}
            </div>
        );
    }

    return (
        <div>
          You are not logged in
        </div>
    );
};

export default Dashboard;
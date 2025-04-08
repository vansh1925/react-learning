import React from 'react';
import { useLocation } from 'react-router-dom';
function Dashboard() {
    const location = useLocation();
    const username = location.state.username;
    const time= location.state.time;
    const password= location.state.password;
    let maskedPassword = password.slice(0,2) + "*".repeat(password.length - 2);


    return (
        <>
        <div>Welcome, {username ?  username : 'Guest'} !</div>
        <div>You logged in at {time}</div>
        <div>Your password is {maskedPassword}</div>
        </>
      );
}

export default Dashboard;
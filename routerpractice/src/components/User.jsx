import React from 'react';
import {useParams} from 'react-router-dom';
function User() {
    const {id}= useParams();
    return ( 
        <div>
            <h1>User</h1>
            <h2>user:{id}</h2>
        </div>
     );
}

export default User;
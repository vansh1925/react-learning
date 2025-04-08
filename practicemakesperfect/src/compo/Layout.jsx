import React from 'react';
import {Outlet,useNavigate} from 'react-router-dom';
import Navbar from './Navbar';

function Layout({isloggedin,setLoggedin}) {
    const navigate=useNavigate();
    const handleClick=()=>{
        setLoggedin(!isloggedin);
        navigate('/login');
        

    }
    return ( 
        <>
        <Navbar/>
        
        <button style={{background:"red"}} onClick={()=>{handleClick()}}>{isloggedin ? 'Logout' : 'Login'}</button>
        <Outlet/>

        </>
     );
}

export default Layout;
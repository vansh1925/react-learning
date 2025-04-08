import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login(isloggedin,setLoggedin) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const time=new Date().toLocaleTimeString();
    

    const HandleSubmit = () => {
        navigate('/dashboard', { state: { username,time ,password} });
        setLoggedin(true);
        
    };

        
    

    return (

        <>
            <input 
                type='text' 
                placeholder='enter your name' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            
            <input 
                type='password' 
                placeholder='enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={HandleSubmit}>Submit</button>
        </>
    );
    
}

export default Login;

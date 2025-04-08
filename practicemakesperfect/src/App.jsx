
import './App.css'
import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './compo/login'
import Home from './compo/Home';
import Dashboard from './compo/Dashboard';
import Layout from './compo/Layout'



function App() {
  const[isloggedin,setLoggedin]=React.useState(false);



  

  const Route= createBrowserRouter([
    {path: '/', element: <Layout isloggedin={isloggedin} setLoggedin={setLoggedin} />,children: [
      {path: '/home',element: <Home/>},
      {path: '/login',element: <Login isloggedin={isloggedin} setLoggedin={setLoggedin}/>},
      {path: '/dashboard',element: isloggedin?<Dashboard/>:<Login/>}
    ]
    },
  ]);

  return (
    <>
      <RouterProvider router={Route}/>
      
    </>
  )
}

export default App

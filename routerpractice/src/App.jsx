import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import User from './components/User'
import Courses from './components/Courses'
import Mocks from './components/Mocks'  
import Tests from './components/Tests'
import NotFound from './components/NotFound'


function App() {
  const Route= createBrowserRouter([
    {path: '/', element: 
      <>
      <Navbar/>
      <Home />
      </>},
    {path: '/about', element: <>
      <Navbar/>
      <About />
      </>},
    {path: '/dashboard', element: <>
      <Navbar/>
      <Dashboard />
      </>,
      children:[
        {path: 'courses', element: <Courses/>},
        {path: 'mocks', element: <Mocks/>},
        {path: 'tests', element: <Tests/>}, 
      ]
      },
      {
        path: '/user/:id',element: <>
        <Navbar/>
        <User/>
        </>
      },
      {
        path: '*', element: <NotFound/>
      }
  ])

  return (
    <>
      <RouterProvider router={Route}/>
    </>
  )
}

export default App
        

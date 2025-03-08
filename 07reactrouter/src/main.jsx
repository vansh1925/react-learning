import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/aboutUs/About'
import Contact from './components/contactUs/Contact'
import Github from './components/github/Github'
import Layout from './layout'

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout/>,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    },
    {
      path:'github',
      element: <Github />
    }
    
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

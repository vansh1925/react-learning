import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind testing</h1>
      <Card username='vansh'/>
      <Card username='naveen' title='bio'/>

    </>
  )
}

export default App



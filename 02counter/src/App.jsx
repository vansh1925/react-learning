import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  //above is hook->Hooks are special functions in React that let you use state and lifecycle features inside functional components.
  //if main normally apna js ki tarah counter variable banaun fir vhi dom se sab krun to vo sab task ko eliminate krke hook hai jo easily 
  //pura ui control krta hai. there are many hooks one of them is useState
  //In React, state is an object that stores dynamic data that affects a component’s behavior and rendering. 
  //Unlike props, state can change over time, making components interactive.
  //Think of state as a component’s memory—it remembers information even after re-renders.
  const addValue=()=>{
    // count++;
    // count++ updates the variable but doesn't notify React.
    // When setCount(count) runs, it's using a value that React didn't track as a state change.
    if(count<20){setCount(count+1)}
  }
  const removeValue=()=>{

    if(count>0){setCount(count-1)}
  }
  return (
    <>
      <h2>Counter {count}</h2>
      <button onClick={addValue}>Add 1</button>
      <br />
      <button onClick={removeValue}>Remove 1</button>
    </>
  )
}

export default App

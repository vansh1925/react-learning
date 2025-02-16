import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const addValue=()=>{
    if(count<20){
      //imp interview k q hai ki aise karenge to kya hoga 
      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)
      //if main aisa kuch karu to aisa nhi ki value 3 baar add hogi actually har baar vo same counter hi jaara 
      //but we can use prevcounter jo ki peechle vale counter ki update krta hai to har baar value change hogi
      //setState does not update immediately; React batches updates for optimization.

      //actually setcounter main ek callback fx jaata hai to
      setCount((prevCounter)=>prevCounter+1)
      setCount((prevCounter)=>prevCounter+1)
      setCount((prevCounter)=>prevCounter+1)
    }
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

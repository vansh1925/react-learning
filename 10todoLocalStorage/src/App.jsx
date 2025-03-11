import { useState } from 'react'
import { TodoContext,TodoProvider,useTodo } from './context/context'

import './App.css'

function App() {
  const {todos,setTodos}=useState();
  const addTodo=(todo)=>{
    //setTodos(todo) agar seedha yeh dunga to vo epurana sab hatadega isliye we will use prev as in that interview q 
    setTodos((prev)=>[...prev,{id:Math.random(),title:todo,completed:false}]);  
    //upr vali line main ...prev yeh vo spread operator hai jo ki prev array ke sare elements ko ek ek karke naya array banata hai and then uske
    //baad new element add kar deta hai yahan todos main pura array hain aur ab purane objects ke sath ek naya object add kar diya hai
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>{
      if(prevtodo.id===id){
        return todo;
      }
      return prevtodo;
    }))
    
    //settodo karo aur jo prev hai uske baad loop chalaya ki jo purane object hain usmain jinka id equal hai updateTodo vale id ke 
    //return krdo setTodo main naya todo varna prev 
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevtodo)=>prevtodo!=id));
    //hame basucally sab valur rkhni hai aur jo same ho use delete to map se to value update hongi to hame to kuch keep ya remove krni 
    //hai to for this case filter is the best
  }
  const completedTodo=(id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>{
      if(prevtodo.id===id){
        return {...prev,compltedTodo:!prev.completedTodo}
        /*toggle krne ka reason ki not se agar true to false agar faalse to true krdo
        ✔ First click: Marks as completed
        ✔ Second click: Marks as not completed
        ✔ Third click: Marks as completed again, and so on…*/
      }
      else{
        return prevtodo;
      }
      //prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo  //short way
    }))
  }


  return (
    <>
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,completedTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
              </div>
          </div>
      </div>
    </TodoProvider>
    </>
  )
}

export default App

/*
update feature samajh neeche
🚀 map() kya karta hai?
Ek naya array return karta hai jo purane array se modify hota hai.
Har element pe ek callback function lagata hai.
Jo value return hoti hai, woh naya array me add ho jati hai.
Purana array modify nahi hota, balki ek updated version milta hai.

prev.map(...) loop karega har todo pe.
Agar prevTodo.id === id hai, to todo return karega (replace ho gaya).
Agar prevTodo.id !== id hai, to wahi purana prevTodo return hoga.
Ek naya array return hoga, jisme sirf ek todo replace ho chuka hoga.
setTodos() is naya array ko state me set karega.

✅ map() ka kaam hai ek naya array return karna.
✅ Yeh purane todos ka ek modified copy bana raha hai.
✅ Jisme sirf matching id wala todo replace ho raha hai.
✅ React setTodos() se state update kar raha hai.



my lines-> jab loop chala to har obj pe chala aur if id match ho to
vo return hua sirf vo obj return hua to purana vala hat gya aur if nhi match ho to
prevtodo vala hi return hua to purana vala hi rha
*/
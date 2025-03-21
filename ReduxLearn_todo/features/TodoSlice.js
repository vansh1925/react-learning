 import {createSlice,nanoid} from '@reduxjs/toolkit';

 export const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[{id:1,text:'Learn Python',completed:false}]
    },
    reducers:{
        //jo property hai aur hum inhe ab state action denge importantq
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,//action main ek obj hai payload and usmain kuch bhi aa skta hai
                completed:false
            }//ab itne se bas sate bani aur action hua update ke liye
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload);//action hai to usko kuch paas hua hoga to uska id leliya

        },
    }
})

//individual reducer ko bhi export krna hoga as use compo use kr ske aur 

export const{addTodo,removeTodo}=todoSlice.actions
//pure reducer ko bhi krna hoga store mainn istemaal krne ke liye
export default todoSlice.reducer
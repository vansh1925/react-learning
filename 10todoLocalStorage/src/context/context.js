import{createContext,UseContext}   from 'react';
export const TodoContext = createContext(
    {
        todos:[{
            id:1,
            title:"Learn React",
            completed:false
        }],
        addTodo: () => { },
        deleteTodo: () => { },
        updateTodo: () => { },
        completedTodo: () => { }
        
    }
);
export const TodoProvider = TodoContext.Provider;
export const useTodo=UseContext(TodoContext);
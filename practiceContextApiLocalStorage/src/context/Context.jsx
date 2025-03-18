import { useContext, createContext, useState } from 'react';
export const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);
export const UserProvider = ({ children }) => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    return (
        <UserContext.Provider value={{count, setCount, name, setName, age, setAge}}>
            {children}
        </UserContext.Provider>
    )
}
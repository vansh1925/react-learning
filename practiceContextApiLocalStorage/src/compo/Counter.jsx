import { useUser } from '../context/context';
function Counter() {
    const [count,setCount]=useUser();
    return (  
        <div>
            <h3>Users count :{count}</h3>
            <button
            onClick={()=>{setCount(count+1)}}>click here after login</button>
        </div>
    );
}

export default Counter;
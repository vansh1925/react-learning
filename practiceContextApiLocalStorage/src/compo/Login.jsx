import { useUser } from '../context/Context'
function Login() {
    const [name, setName] = useUser();
    const [age, setAge] = useUser();
    return ( 
        <div>
            <h3>Login karo users</h3>
            <input
                placeholder="enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                placeholder="enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button>Submit</button>
        </div>
     );
}

export default Login;
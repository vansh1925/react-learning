import {useNavigate} from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    const eventHandler = () => {
        navigate('/about');
    }
    return (  
        <div>
            <h1>Home</h1>
            <p>Welcome to the Home page!</p>
            <button onClick={eventHandler}>Click this to go to about Page</button>
        </div>
    );
}

export default Home;
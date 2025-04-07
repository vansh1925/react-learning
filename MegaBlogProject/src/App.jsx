import './App.css'
import {useState,useEffect   } from 'react';
import {useDispatch} from 'react-redux';
import authService from '../appwrite/auth';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const {loading,setLoading} = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}));
      } else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))   
  },[]);
  
  if(loading){
    return <div className='loading'>Loading...</div>
  } else{
    return <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'></div>
      <Header /> 
      <Footer/>
    </div>
  }
}

export default App

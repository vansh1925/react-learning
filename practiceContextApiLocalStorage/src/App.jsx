import Login from './compo/Login'
import Counter from './compo/Counter'
import { UserProvider } from './context/Context'


function App() {
  return (
    <>
      <h3>List of users jinhone enter kiya hai</h3>
      <UserProvider>
      
      <Login />
      <Counter />
      <h4>the total users are</h4>
      </UserProvider>
    </>
  )
}

export default App

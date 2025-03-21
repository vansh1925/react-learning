
import './App.css'
import AddTodo from '../compo/AddTodo'
import Todos from '../compo/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App

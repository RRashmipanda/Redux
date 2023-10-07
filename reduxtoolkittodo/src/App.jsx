import { useState } from 'react'
import Todo  from './Components/Todo'
import './App.css'
import  AddTodo  from './Components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Learn redux Tool kiit</h1>
       <AddTodo/>
       <Todo/>

       </>
  )
}

export default App

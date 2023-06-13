import "./App.css"
import TodoList from "./components/Todolist"
import { useDispatch } from "react-redux"
import { addTodo } from "./redux-toolkit/store"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          dispatch(addTodo(element.title))
        })
      })
  }, [])

  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App

import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "../redux-toolkit/store"

function TodoList() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")
  const [checked, setChecked] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue))
    }
    setInputValue("")
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleDelete = () => {
    if (checked.length > 0) {
      dispatch(deleteTodo(checked))
    }
    setChecked([])
    document.querySelectorAll(".cbox").forEach((el) => {
      el.checked = false
    })
  }

  const handleCheck = (e) => {
    const todoId = parseInt(e.target.id)
    let updatedList = []

    if (e.target.checked) {
      updatedList = [...checked, todoId]
    } else {
      updatedList = checked.filter((id) => id !== todoId)
    }
    setChecked(updatedList)
  }

  return (
    <div>
      <h1>Todos</h1>
      <form>
        <input
          id="add-todo-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <div key={index}>
            <input
              className="cbox"
              type="checkbox"
              onChange={handleCheck}
              id={index}
            ></input>
            <label>{todo}</label>
          </div>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete checked</button>
    </div>
  )
}

export default TodoList

import { configureStore, createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action) => {
      const deleteIds = action.payload
      return state.filter((todo, index) => !deleteIds.includes(index))
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
})

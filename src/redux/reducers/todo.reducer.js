import {createSlice} from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [
      {
        txt: 'Complete online javascript course',
        completed: true,
        id: 0,
      },
      {
        txt: 'Jog around the park',
        completed: false,
        id: 1,
      },
      {
        txt: '10 minutes meditation',
        completed: false,
        id: 2,
      },
      {
        txt: 'Read for one hour',
        completed: false,
        id: 3,
      },
      {
        txt: 'Pick up grocceries',
        completed: false,
        id: 4,
      },
      {
        txt: 'Complete todo app on frontend mentor',
        completed: false,
        id: 5,
      },
    ],
    themeColor: 'light',
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        txt: action.payload.newTodo,
        id: state.todoList.length ? action.payload.id : 1,
        completed: false,
      })
    },
    removeTodo: (state, action) => {
      const indexOfRemovingTodo = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      )
      state.todoList.splice(indexOfRemovingTodo, 1)
    },
    completeTodo: (state, action) => {
      state.todoList.forEach((todo) => {
        if (todo.id === action.payload.id) todo.completed = !todo.completed
      })
    },
    dragAndDropRefreshState: (state, action) => {
      return {...state, todoList: action.payload}
    },
    changeThemeColor: (state, action) => {
      return {...state, themeColor: action.payload}
    },
  },
})

export const {
  addTodo,
  removeTodo,
  completeTodo,
  dragAndDropRefreshState,
  changeThemeColor,
} = TodoSlice.actions
export default TodoSlice.reducer

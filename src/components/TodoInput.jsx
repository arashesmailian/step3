/* eslint-disable no-unused-vars */
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/reducers/todo.reducer'
import {useState} from 'react'
import store from '../redux/store'

const TodoInput = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState('')
  const findMaxIndexOfTodos = () => {
    let currentState = store.getState().todo.todoList
    let max = 0
    currentState.forEach((todo) => (max = todo.id > max ? todo.id : max))
    return max
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (newTodo)
      dispatch(addTodo({newTodo: newTodo, id: findMaxIndexOfTodos() + 1}))
    setNewTodo('')
  }
  return (
    <form className='todo-input' onSubmit={submitHandler}>
      <div className='todo-mark'></div>
      <input
        type='text'
        placeholder='Create a new todo'
        onChange={(e) => {
          setNewTodo(e.target.value)
        }}
        value={newTodo}
      />
    </form>
  )
}

export default TodoInput

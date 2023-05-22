/* eslint-disable no-unused-vars */
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '@/redux/reducers/todo.reducer'
import store from '@/redux/store'
import styles from '@/components/TodoInput/todo_input.module.css'

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
    <form className={styles.todo_input} onSubmit={submitHandler}>
      <div className={styles.todo_mark}></div>
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

import TodoInput from '../TodoInput/TodoInput'
import TodoList from '../TodoList/TodoList'
import styles from './todos_container.module.css'

const TodosContainer = () => {
  return (
    <div className={styles.todos_container}>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default TodosContainer

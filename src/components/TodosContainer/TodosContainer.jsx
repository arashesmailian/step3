import TodoInput from '@/components/TodoInput/TodoInput'
import TodoList from '@/components/TodoList/TodoList'
import styles from '@/components/TodosContainer/todos_container.module.css'

const TodosContainer = () => {
  return (
    <div className={styles.todos_container}>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default TodosContainer

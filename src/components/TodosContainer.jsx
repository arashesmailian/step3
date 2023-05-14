import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styles from "./todos_container.module.css";

const TodosContainer = () => {
  return (
    <div className={styles.todos_container}>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodosContainer;

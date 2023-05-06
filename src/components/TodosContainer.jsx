import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodosContainer = () => {
  return (
    <div className="todos-container">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default TodosContainer;

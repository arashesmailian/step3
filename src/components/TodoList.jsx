import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/reducers/todo.reducer";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  console.log(todos);
  const completeTaskHandler = (task) => {
    console.log(task);
    dispatch(removeTodo(task));
  };

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id} onClick={() => completeTaskHandler(todo)}>
              <li className="todo-item">
                <p>{todo.txt}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo.reducer";
import { useState } from "react";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (newTodo) dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  return (
    <form className="todo-input" onSubmit={submitHandler}>
      <div className="todo-mark"></div>
      <input
        type="text"
        placeholder="Create a new todo"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        value={newTodo}
      />
    </form>
  );
};

export default TodoInput;

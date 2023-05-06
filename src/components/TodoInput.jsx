import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo.reducer";
import { useState } from "react";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  //   const inputChangeHandler = (e) => {
  //     console.log(e.target.value);
  //     setNewTodo(e.target.value);
  //   };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newTodo);
    if (newTodo) dispatch(addTodo(newTodo));
  };
  return (
    <form className="todo-input" onSubmit={submitHandler}>
      <div className="todo-mark"></div>
      <input
        type="text"
        placeholder="Create a new todo"
        onChange={(e) => {
          console.log(e.target.value);
          setNewTodo(e.target.value);
        }}
      />
    </form>
  );
};

export default TodoInput;

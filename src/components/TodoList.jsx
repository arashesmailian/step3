/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, completeTodo } from "../redux/reducers/todo.reducer";

import DeleteIcon from "../assets/images/icon-cross.svg";
import { useRef, useState } from "react";
import { useEffect } from "react";

const TodoList = () => {
  const dispatch = useDispatch();
  const conditionList = useRef();
  const todos = useSelector((state) => state.todo);
  const [filterTodos, setFilterTodos] = useState("");
  const [condition, setCondition] = useState("All");

  const deleteTaskHandler = (task) => {
    dispatch(removeTodo(task));
  };
  const checkTriggerHandler = (todo) => {
    dispatch(completeTodo(todo));
  };

  const conditionsClickHandler = (e) => {
    const allConsditions = conditionList.current.children;
    for (let i of allConsditions) i.setAttribute("status", "false");
    e.target.setAttribute("status", "true");
    setCondition(e.target.textContent);
  };

  useEffect(() => {
    switch (condition) {
      case "All":
        return setFilterTodos(todos);
      case "Active":
        return setFilterTodos(todos.filter((todo) => todo.completed == false));
      case "Completed":
        return setFilterTodos(todos.filter((todo) => todo.completed == true));
    }
    setFilterTodos(todos);
  }, [todos, condition]);

  return (
    <div className="todo-list">
      <ul>
        {filterTodos
          ? filterTodos.map((todo) => {
              return (
                <div key={todo.id}>
                  <li className="todo-item" completed={String(todo.completed)}>
                    <p onClick={() => checkTriggerHandler(todo)}>{todo.txt}</p>
                    <div
                      className="delete-icon-container"
                      onClick={() => deleteTaskHandler(todo)}
                    >
                      <img
                        className="delete-icon"
                        src={DeleteIcon}
                        alt="delete icon"
                      />
                    </div>
                  </li>
                </div>
              );
            })
          : ""}
        <div>
          <li className="footer">
            <p>
              {todos.filter((todo) => todo.completed == false).length} items
              left
            </p>
            <div className="footer-conditions" ref={conditionList}>
              <p status="true" onClick={(e) => conditionsClickHandler(e)}>
                All
              </p>
              <p status="false" onClick={(e) => conditionsClickHandler(e)}>
                Active
              </p>
              <p status="false" onClick={(e) => conditionsClickHandler(e)}>
                Completed
              </p>
            </div>
            <p onClick={() => setCondition("Active")}>Clear completed</p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default TodoList;

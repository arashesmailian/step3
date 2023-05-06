import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      txt: "Complete online javascript course",
      completed: true,
      id: 0,
    },
    {
      txt: "Jog around the park",
      completed: false,
      id: 1,
    },
    {
      txt: "10 minutes meditation",
      completed: false,
      id: 2,
    },
    {
      txt: "Read for one hour",
      completed: false,
      id: 3,
    },
    {
      txt: "Pick up grocceries",
      completed: false,
      id: 4,
    },
    {
      txt: "Complete todo app on frontend mentor",
      completed: false,
      id: 5,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        txt: action.payload,
        id: state[state.length - 1].id + 1,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      const indexOfRemovingTodo = state.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.splice(indexOfRemovingTodo, 1);
    },
  },
});

export const { addTodo, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;

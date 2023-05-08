/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";

function App() {
  const [theme, setTheme] = useState("light");
  document.querySelector("html").style.backgroundColor =
    theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 21%, 11%)";
  return (
    <>
      <div className="App" theme={theme}>
        <TodoHeader theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;

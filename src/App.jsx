import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <div className="App" theme={theme}>
        <TodoHeader theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;

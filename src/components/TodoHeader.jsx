import TodosContainer from "./TodosContainer";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";

const TodoHeader = ({ theme, setTheme }) => {
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <header>
      <div className="container">
        <h1 className="title">TODO</h1>
        <img
          onClick={changeTheme}
          src={theme === "dark" ? sun : moon}
          alt="theme icon"
        />
      </div>
      <TodosContainer />
    </header>
  );
};

export default TodoHeader;

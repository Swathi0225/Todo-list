import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DateTime from "./components/DateTime";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("savedTheme") || "standard"
  );

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("savedTheme", theme);
  }, [theme]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <TodoForm todos={todos} setTodos={setTodos} theme={theme} />
      <DateTime />
      <TodoList todos={todos} setTodos={setTodos} theme={theme} />
    </>
  );
}

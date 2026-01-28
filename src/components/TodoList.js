import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos, theme }) {
  return (
    <ul className="mt-6 flex flex-col items-center">
      {todos.map((todo, i) => (
        <TodoItem
          key={i}
          todo={todo}
          index={i}
          todos={todos}
          setTodos={setTodos}
          theme={theme}
        />
      ))}
    </ul>
  );
}

export default function TodoItem({ todo, index, todos, setTodos }) {
  const toggle = () => {
    const copy = [...todos];
    copy[index].completed = !copy[index].completed;
    setTodos(copy);
  };

  const remove = () => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <li
      className={`flex items-center justify-between w-80 p-2 m-2 rounded-full 
      ${todo.completed ? "completed" : ""}`}
    >
      <span className="flex-1 px-2">{todo.text}</span>
      <button onClick={toggle}>✔</button>
      <button onClick={remove}>🗑</button>
    </li>
  );
}

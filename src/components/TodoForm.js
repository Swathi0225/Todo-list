export default function TodoForm({ todos, setTodos, theme }) {
  const addTodo = e => {
    e.preventDefault();
    const value = e.target.todo.value;
    if (!value) return alert("You must write something!");
    setTodos([...todos, { text: value, completed: false }]);
    e.target.reset();
  };

  return (
    <form
      onSubmit={addTodo}
      className="flex justify-center gap-0 mt-4 px-4"
    >
      <input
  name="todo"
  type="text"
  placeholder="Add a task."
  className="p-3 rounded-l-xl w-full max-w-md outline-none
             text-black placeholder:text-gray-400"
/>

      <button className="px-6 rounded-r-xl bg-white text-black">
        I Got This!
      </button>
    </form>
  );
}

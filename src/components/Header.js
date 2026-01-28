export default function Header({ theme, setTheme }) {
  return (
    <div className="flex flex-col items-center min-h-[25vh]">
      <div className="flex gap-3 self-end mr-6">
        {["standard","light","darker"].map(t => (
          <div
            key={t}
            onClick={() => setTheme(t)}
            className={`w-9 h-9 rounded-full cursor-pointer border ${t}`}
          />
        ))}
      </div>

      <h1
        id="title"
        className={`text-5xl mt-12 ${
          theme === "darker" ? "darker-title" : ""
        }`}
      >
        Just do it.
      </h1>

      </div>
  );
}

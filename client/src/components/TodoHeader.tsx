import { useTodoContext } from "../contexts/todoContext";

function TodoHeader() {
  const { isDarkMode, setIsDarkMode } = useTodoContext();
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-[4rem] font-bold tracking-[1.5rem] text-white">
        TODO
      </h1>
      <div>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          <img
            src={`${isDarkMode ? "./icon-sun.svg" : "./icon-moon.svg"}`}
            alt="moon icon"
            className="cursor-pointer transition-all duration-500 ease-in-out hover:scale-110"
          />
        </button>
      </div>
    </div>
  );
}

export default TodoHeader;
